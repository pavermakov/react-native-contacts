import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Contacts from "../components/Contacts";
import { fetchUsers } from '../contacts.actions';

class ContactsScreen extends PureComponent {
  static navigationOptions = {
    title: 'Contacts',
  };

  state = {
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    this.refreshContacts()
      .then(() => {
        this.setState({ isLoading: false });
      });
  }

  refreshContacts = () => {
    return this.props.fetchUsers();
  };

  render() {
    return (
      <Contacts
        isLoading={this.state.isLoading}
        users={this.props.users}
        onRefresh={this.refreshContacts}
      />
    )
  }
}


const mapStateToProps = ({ contactsReducer }) => {
  return {
    users: contactsReducer.users,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen);
