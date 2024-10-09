import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value: 0,
};


export const fetchUserById = createAsyncThunk(
    'account/getUser',
    // Declare the type your function argument here:
    async (userId) => {
      const response = await axios.get(`http://localhost:8080/accounts/${userId}`)
      // Inferred return type: Promise<MyData>
      return response.data.amount;
    },
  )


export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },
        incrementByAmount: (state, action) => {
            if (state.value + action.payload >= 0) {
                state.value += action.payload;
            }
            else{
                state.value = 0
            }
        },
    },
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
