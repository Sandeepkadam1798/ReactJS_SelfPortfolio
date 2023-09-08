
// import React, { createContext, useContext, useState } from 'react';

// const MyContext = createContext();


// const SideBarContaxt = ({children }) => {

//     const [sidenav, setsidenav] = useState(false);
//   return (
//     <MyContext.Provider value={{ sidenav, setsidenav}}>
//       {children}
//     </MyContext.Provider>

//   )
// }

// export function useMyContext() {
//     const context = useContext(MyContext);
//     if (!context) {
//       throw new Error('useMyContext must be used within a MyContextProvider');
//     }
//     return context;
//   }
  

// export default SideBarContaxt


// SideNavContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const SideNavContext = createContext();

// Custom hook to use the context
export function useSideNav() {
  return useContext(SideNavContext);
}

// Provider component
export function SideNavProvider({ children }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen((prevState) => !prevState);
  };

  return (
    <SideNavContext.Provider value={{ isSideNavOpen, toggleSideNav }}>
      {children}
    </SideNavContext.Provider>
  );
}
 