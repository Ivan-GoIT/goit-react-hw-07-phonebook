import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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
      const {data,status} = await axios.post('/contacts',contact);

      if(status===201){
        thunkAPI.dispatch(fetchContacts())
      }

      toast.success(data.toString())

      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const {data,status} = await axios.delete(`/contacts/${id}`);

      if(status===200){
        thunkAPI.dispatch(fetchContacts())
      }

      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

  }
);


