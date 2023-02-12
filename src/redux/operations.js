import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './contacts/contactsSlice';

axios.defaults.baseURL = 'https://63e61fd5c8839ccc2851c8b7.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts',{...contact});

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts=()=>async dispatch=>{

//     try {

//         dispatch(fetchingInProgress())

//         const response=await axios.get('/contacts')

//         dispatch(fetchingSuccess(response.data))

//     } catch (error) {
//         dispatch(fetchingError(error.message))
//     }
// }
