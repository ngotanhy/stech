//rxslice

import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const demoSlice = createSlice({
  name:'demoSlice',
  initialState,
  reducers: {
      'actionName':()=>{
         //su ly state
         return {...state}
      }
  }
});

export const {actionName} = demoSlice.actions

export default demoSlice.reducer