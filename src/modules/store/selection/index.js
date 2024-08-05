import { createSlice } from "@reduxjs/toolkit";

const selection = createSlice({
    name:'selection',
    initialState:{
        options:[],
        result:0
    },
    reducers:{
        addToOption(state, action){
            state.options.push(action.payload)
            state.result = state.result + +action.payload;
        }
    }
})

export const {
   addToOption
  } = selection.actions;
export default selection.reducer