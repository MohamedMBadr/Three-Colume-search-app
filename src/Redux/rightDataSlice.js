import { createSlice } from "@reduxjs/toolkit";
const { data } = require("./data.json");
/*  */
let initialState = { rightData: [], rightMassage: "" }

let dataSlice = createSlice({
    name: "rightData",
    initialState,
    reducers: {
        rightSearch: (state, action) => {
            if( action.payload !=0 ){

            let searchItem = action.payload;
            console.log("rightsearchItem " + searchItem);

            if (searchItem > 0 & searchItem <= Object.keys(data).length & searchItem != undefined) {
                state.rightData = data[searchItem];
            }
            else {
                state.rightData.overviewFields = undefined;
                state.rightData.detailedFields = undefined;
                state.rightMassage = 'invalid search parameters'
            }      
              }else{
                state.rightMassage ='invalid search parameter';}

        },





    }
});

export let rhightDataReducer = dataSlice.reducer;

export let { rightSearch } = dataSlice.actions;