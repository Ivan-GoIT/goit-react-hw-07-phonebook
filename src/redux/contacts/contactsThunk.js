import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63e61fd5c8839ccc2851c8b7.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const {data} = await axios.post('/contacts',{...contact});
      return data;

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
