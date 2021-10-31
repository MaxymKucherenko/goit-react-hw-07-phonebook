import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts } from './contacts-operations';
import actions from './contacts-action';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ number }) => number !== payload),
  [fetchContacts.fulfilled]: (_, action) => action.payload,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => true,
  [fetchContacts.rejected]: () => true,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
