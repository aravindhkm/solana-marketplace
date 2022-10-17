import React from "react";

const userContextProvider = React.createContext({
  collectionPublicKeys: [],
  collection: [],
  nftIsLoading: false,
  loadCollection: () => {},
  loadItemMetadata: () => {},
  setNftIsLoading: () => {},
});

export default CollectionContext;