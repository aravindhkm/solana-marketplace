import React, {useState,useReducer,createContext } from "react";

import {WalletCollectionAction} from './ActionTypes.js';

const walletCollectionState = {
    publicKeys: [],
    metadataKeys: [],
    uriStore: []
    // findByIndex: () => {},
};

export const walletCollectionStore = (state, action) => {
  switch (action.type) {
    case WalletCollectionAction.ADD:
      return {
        ...state,
        publicKeys: [action.payload.publicKeys,...state.publicKeys],
        metadataKeys: [action.payload.metadataKeys,...state.metadataKeys],
        uriStore:  [action.payload.uriStore,...state.uriStore],
      };
    case WalletCollectionAction.DELETE:
      return {
        ...state,
        publicKeys: state.tags.filter((tag) => tag !== action.payload.publicKeys),
        metadataKeys: state.tags.filter((tag) => tag !== action.payload.metadataKeys),
      };
    case WalletCollectionAction.FINDBYINDEX:
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};


const walletCollectionContext = createContext(walletCollectionState);

export const WalletContextProvider = (props) => {


    return (
      <walletCollectionContext.Provider value={walletCollectionState}>
        {props.children}
      </walletCollectionContext.Provider>
    );
}

export const walletCollectionStates = walletCollectionState;

const store = () => {
    const [state, dispatch] = useReducer(walletCollectionStore, walletCollectionState);

    return (
      <div></div>
    );
}

export default store;
