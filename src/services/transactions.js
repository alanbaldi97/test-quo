"use client";

import http from "../plugins/http";


export const getTransactions = async (params) => {
    const { data } = await http.get("api/transactions", { params });
    return data;
}