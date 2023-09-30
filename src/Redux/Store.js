import { configureStore } from '@reduxjs/toolkit';
import { dataReducer } from './DataSlice';
import { rhightDataReducer } from './rightDataSlice';




let store = configureStore({
    reducer: {
        dataSearch: dataReducer,
        rightDataSearch: rhightDataReducer,
    }
});


export default store;