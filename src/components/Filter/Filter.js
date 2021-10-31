import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from '../../redux';
import actions from '../../redux/contacts/contacts-action';
import styles from './filter.module.css';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label htmlFor="filter" className={styles.filterLabel}>
      Find contacts by name
      <input
        className={styles.filterInput}
        type="text"
        value={value}
        onChange={(e) => dispatch(actions.changeFilter(e.currentTarget.value))}
        id="filter"
      />
    </label>
  );
}
