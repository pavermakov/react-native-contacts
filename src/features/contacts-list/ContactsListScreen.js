import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContactsItem from './components/ContactsItem';
import { fetchUsers } from './store/actions';

class ContactsListScreen extends PureComponent {
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    this.props.fetchUsers();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Contacts List Screen</Text>
        <Text>Total users: {this.props.users.length}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ contactsListReducer }) => {
  return {
    users: contactsListReducer.users,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListScreen);
