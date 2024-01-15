import {createContext, useState} from "react";

// context creation only!
export const AuthContext = createContext(null);

// children are part of React
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = ({ userName, password }) => {
    // check if valid
    setUser({ id: 1, userName: 'Nir' })
  }

  const signOut = () => {
    setUser(null);
  }

  const value = {
    user, signIn, signOut
  }

  return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
  )

}
