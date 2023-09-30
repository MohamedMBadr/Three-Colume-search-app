import { createSlice } from "@reduxjs/toolkit";
const { data } = require("./data.json");



let initialState = { data: [], massage: "" }

let dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        LeftSearch: (state, action) => {
            if( action.payload !=0 ){
            let searchItem = action.payload;
            console.log("searchItem " + searchItem);
        
            if (searchItem > 0 & searchItem <= Object.keys(data).length & searchItem != undefined) {
                state.data = data[searchItem];
            }
            else {
                state.data.overviewFields = undefined;
                state.data.detailedFields = undefined;
                state.massage = 'invalid search parameter ' ;
            }
            }else{ state.massage ='invalid search parameter';}
        },





    }
});

export let dataReducer = dataSlice.reducer;

export let { LeftSearch } = dataSlice.actions;