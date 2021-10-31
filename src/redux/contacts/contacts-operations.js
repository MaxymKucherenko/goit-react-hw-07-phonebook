import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../service/contacts-api';

export const fetchContacts = createAsyncThunk(
  'user/fetchContacts',
  async () => {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  }
);

export const postContacts = createAsyncThunk(
  'user/postContacts',
  async (contact) => {
    try {
      const data = await contactsAPI.postContacts(contact);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'user/deleteContacts',
  async (contactId) => {
    try {
      const data = await contactsAPI.deleteContacts(contactId);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
