// import React, { createContext, useContext, useState } from "react"

// const ToggleContext = createContext()

// export const ToggleProvider = ({ children }) => {
//     const [database, setDataBase] = useState([]);

//     return (
//         <ToggleContext.Provider value={{database, setDataBase}}>
//             {children}
//         </ToggleContext.Provider>
//     )
// }
// export const useToggleContext = useContext(ToggleContext)

import { createContext } from "react";

const mycontext = createContext();

export default mycontext;