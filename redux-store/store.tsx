import React from "react";
import { configureStore } from '@reduxjs/toolkit'
import {
    Provider,
} from 'react-redux'
import {walletSlice} from "./wallet";

export const store = configureStore({
    reducer: {
        wallet: walletSlice.reducer,
    },
    preloadedState: {
        wallet: {
            address: "",
        },
    },
});

export const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

// store.subscribe(() => console.log(store.getState()))
