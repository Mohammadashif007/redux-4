import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
    reducerPath: "admin",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
    endpoints: (builder) => ({
        getAccounts: builder.query({
            query: () => `accounts`,
            providesTags: ["accounts"],
        }),
        addAccounts: builder.mutation({
            query: (amount, id) => ({
                url: "accounts",
                method: "POST",
                body: { amount, id },
            }),
            invalidatesTags: ["accounts"],
        }),
        deleteAccounts: builder.mutation({
            query: (id) => ({
                url: `/accounts/${id}`,
                method: "Delete",
            }),
            invalidatesTags: ["accounts"],
        }),
        updateAccounts: builder.mutation({
            query: ({id, amount}) => ({
                url: `/accounts/${id}`,
                method: "PATCH",
                body: {amount}
            }),
            invalidatesTags: ["accounts"],
        })
    }),
});

export const {
    useGetAccountsQuery,
    useAddAccountsMutation,
    useDeleteAccountsMutation,
    useUpdateAccountsMutation
} = adminApi;
