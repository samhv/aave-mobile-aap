import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Navigation} from "./navigation";
import {ReduxProvider, store} from "./redux-store/store";

export default function App() {
      return (
          <ReduxProvider>
            <Navigation/>
            <StatusBar style="auto" />
          </ReduxProvider>
      );
}
