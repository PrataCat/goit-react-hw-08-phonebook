import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/contactsSlice';
import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const changeFilter = e => {
    dispatch(setFilterValue(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={changeFilter}
      ></FilterInput>
    </FilterLabel>
  );
};

export default Filter;
