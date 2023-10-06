import { createSlice } from "@reduxjs/toolkit";

export const ReservasSlice = createSlice({
    name:'reservation',
    initialState:{
        hotelsReservation:[]
    },
    reducers:{
        addReservation:(state, {payload})=>{
            state.hotelsReservation.push(payload);
        }
    }
});

export const {addReservation} = ReservasSlice.actions;