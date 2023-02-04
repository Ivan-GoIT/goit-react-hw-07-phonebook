const { createSlice } = require('@reduxjs/toolkit');
const { filterInitState } = require('./filter.init-state');

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    filterChangeAction: (_, { payload }) => payload,
  },
});

export const filterReducer=filterSlice.reducer

export const {filterChangeAction}=filterSlice.actions
