import {configureStore} from '@reduxjs/toolkit'
import { ReservasSlice } from './reservasSlice';

const store = configureStore({
    reducer:{
        reservation: ReservasSlice.reducer
    }
});

export default store