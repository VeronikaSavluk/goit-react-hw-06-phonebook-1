import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/actions';
import { getContacts } from 'redux/selectors';
import { List, ContactItem, DataContact, Delete } from './ContactList.styled';

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    return (
        <List>
            {contacts.map(({id, name, number}) => (
                <ContactItem key={id}>
                    <DataContact>{name}:</DataContact>
                    <DataContact>{number}</DataContact>
                    <Delete onClick={() => dispatch(deleteContact(id))}>Delete</Delete>
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
        }),
    )
}

export default ContactList;