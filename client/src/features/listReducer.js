import { createSlice } from '@reduxjs/toolkit'

const info = require("./../albums.json")

const initialState = {data : info, filter: "ALL"}

const listSlice = createSlice({
    name: "list",
    initialState: initialState,
    reducers: {

        filter: (state, action) => {

            state.data = info;

            if(action.payload !== "ALL"){
                state.data = state.data.filter(obj => obj.source === action.payload);
                state.filter = action.payload;
            }

            state.filter = action.payload;
        },

        deleter: (state,action) => {
            state.data = null;
            state.filter = null;
        }
        
    } 
})

export const {filter, deleter} = listSlice.actions;

export default listSlice.reducer;