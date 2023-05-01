import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // payloadCreator(arg, thunkAPI)
  // arg (_) - значення, яке було передано операції під час виклику.Використовується, наприклад, для передачі ідентифікаторів об'єктів при видаленні, тексту нотаток при створенні, тощо.
  // thunkAPI - об'єкт, який передається в асинхронний генератор екшену в redux-thunk. Містить властивості та методи доступу до стору, відправки екшенів, а також деякі додаткові.
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      console.log(
        'thunkAPI.rejectWithValue(error.message) :>> ',
        rejectWithValue(error.message)
      );
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', newContact);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (idContact, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${idContact}`);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// USER
// POST   /users​/signup    Create a new user
// POST ​  /users​/login     Login user
// POST ​  /users​/logout    Log out user

// User{
// id	string Backend-generated unique identifier.
// name*	string Username.
// email*	string E-mail address.
// password*	string Password.
// }
// example: OrderedMap { "name": "Adrian Cross", "email": "across@mail.com", "password": "examplepwd12345" }

// CONTACT
// GET ​    /contacts         Get all user contacts
// POST ​   /contacts         Create a new contact
// DELETE ​ /contacts​/{contactId}    Delete contact.
// PATCH ​  /contacts​/{contactId}    Update an existing contact

// Contact{
// id	string Backend-generated unique identifier.
// name*	string Contact name.
// number*	string Phone number of the contact.
// }
// example: OrderedMap { "name": "Jacob Mercer", "number": "761-23-96" }

// ! RTK Query:
// Нічого
