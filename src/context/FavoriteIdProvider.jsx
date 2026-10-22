import React, { Children } from "react";
import { useState } from "react";

import  FavoriteIdContext  from "./ContextFavoriteId";

export const FavoriteIdProvider = ({ children }) => {
  const [favoriteId, setFavoriteId] = useState(null);
  return (
    <FavoriteIdContext.Provider value={{ favoriteId, setFavoriteId }}>
      {children}
    </FavoriteIdContext.Provider>
  );
};
