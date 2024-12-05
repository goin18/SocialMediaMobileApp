import { UserData } from "@/services/userSerivice";
import { User } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

type AuthContextProviderProps = {
    children: React.ReactNode;
};

type AuthContextType = {
    user: User | null;
    userData: UserData | null;
    setAuth: (authUser: User | null) => void;
    setUserDataAuth: (userData: UserData) => void;
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
const [userData, setUserData] = useState<UserData | null>(null);

  const setAuth = (authUser: User | null) => {
    setUser(authUser);
  };

  const setUserDataAuth = (userData: UserData) => {
    setUserData(userData);
  };

return (
    <AuthContext.Provider value={{ user, userData, setAuth, setUserDataAuth }}>
      {children}
    </AuthContext.Provider>
  );
};


