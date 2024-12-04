import { User } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

type AuthContextProviderProps = {
    children: React.ReactNode;
};

type AuthContextType = {
    user: User | null; 
    setAuth: (authUser: User | null) => void;
    // setUserData: (userData: Partial<AuthContextType>) => void; // Optional user data update
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
const [user, setUser] = useState<User | null>(null);

  const setAuth = (authUser: User) => {
    setUser(authUser);
  };

//   const setUserData = (userData) => {
//     setUser({ ...userData });
//   };

return (
    <AuthContext.Provider value={{ user, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};


