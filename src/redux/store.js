import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/account/accountSlice";
import bonusReducer from "./features/bonus/bonusSlice";
import { adminApi } from "./api/adminSlice";

export const store = configureStore({
    reducer: {
        accounts: accountReducer,
        bonus: bonusReducer,
        [adminApi.reducerPath]: adminApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(adminApi.middleware),
});
