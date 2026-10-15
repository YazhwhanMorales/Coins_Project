import React, { Children } from "react";
import { useState } from "react";

import { ContexAutor } from "./ContexAutor";

export const AutoProvider = ({ children }) => {
  const [autor, setAutor] = useState("Yazhwhan");
  return (
    <ContexAutor.Provider value={{ autor, setAutor }}>
      {children}
    </ContexAutor.Provider>
  );
};
