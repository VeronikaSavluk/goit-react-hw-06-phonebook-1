import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { toggleCompleted, setStatusFilter } from "../../redux/actions";
import { getStatusFilter } from "../../redux/selectors";
import { statusFilters } from "../../redux/constants";
import { nanoid } from "nanoid";

import { ContactBook, NameInput } from './FilterContactListItem.styled';
import { NameLable } from '../ContactForm/ContactForm.styled';

const FilterContactList = () => {
    const QueryInputId = nanoid();
    const dispatch = useDispatch();

    const filter = useSelector(getStatusFilter);
    const query = useSelector(state => state.some.query);

    const handleFilterChange = query => dispatch(setStatusFilter(query));
const handleToggle = () => dispatch(toggleCompleted(contact.id));
    return (
        <ContactBook>
            <NameLable htmlFor={QueryInputId}>Find contacts by name</NameLable>
            <NameInput
                type="text"
                name="query"
                value={query}
                id={QueryInputId}
                onChange={onChange}
        />
        </ContactBook>
    )
}

FilterContactList.propTypes = {
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    QueryInputId: PropTypes.func,
}

export default FilterContactList;