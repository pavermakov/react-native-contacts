import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContactsList from "../components/ContactsList";
import { fetchUsers } from '../contactsList.actions';

const mapStateToProps = ({ contactsListReducer }) => {
  return {
    users: contactsListReducer.users,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
