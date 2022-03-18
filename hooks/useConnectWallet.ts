import {walletSlice} from "../redux-store/wallet";
import {useDispatch} from "react-redux";
import { G } from "react-native-svg";

export const useConnectWallet = () => {
    // TODO -- get user's address
    const address = "0xsambranoscarluis";
    const dispatch = useDispatch();
    const connectWallet = () => dispatch(walletSlice.actions.setAddress(address))
    
    return connectWallet
}
