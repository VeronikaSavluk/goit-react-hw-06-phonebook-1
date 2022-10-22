import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constans";
import { getContacts, getStatusFilter } from 'redux/selectors';
import { List, ContactItem, DataContact, Delete } from './ContactList.styled';

const getVisibleContacts = (contacts, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return contacts.filter(contact => contact.active);
    default:
      return contacts;
  }
};

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getStatusFilter);
    const visibleContacts = getVisibleContacts(contacts, statusFilter);

    return (
        <List>
            {visibleContacts.map(({id, name, number}) => (
                <ContactItem key={id}>
                    <DataContact>{name}:</DataContact>
                    <DataContact>{number}</DataContact>
                    <Delete onClick={() => onDeleteContact(id)}>Delete</Delete>
                </ContactItem>
            ))}
        </List>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string,
            onDeleteContact: PropTypes.func,
        }),
    )
}

export default ContactList;