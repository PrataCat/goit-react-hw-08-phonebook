import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const changeFilter = e => {
    dispatch(setFilterValue(e.currentTarget.value));
  };

  return (
    <label className={css['filter-label']}>
      Find contacts by name
      <input
        className={css['filter-input']}
        type="text"
        value={filter}
        onChange={changeFilter}
      ></input>
    </label>
  );
};

export default Filter;
