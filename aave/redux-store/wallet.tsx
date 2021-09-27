import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {State} from "./type";

type Address = string;

export interface WalletState {
  address: Address,
}

const initialState: WalletState = { address: "" };

const setAddress: CaseReducer<WalletState, PayloadAction<Address>> = (state, action) => {
    state.address = action.payload;
};

export const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        setAddress,
    },
});

export const walletSelectors = {
    isWalletSetUp: (state: State) =>
        !!state.wallet.address,
    address: (state: State) =>
        state.wallet.address,
};
