import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Contacts from "../components/Contacts";
import { fetchUsers } from '../contacts.actions';

class ContactsScreen extends PureComponent {
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

  refreshContacts = (page) => {
    return this.props.fetchUsers({ page });
  };

  render() {
    return (
      <Contacts
        navigation={this.props.navigation}
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
