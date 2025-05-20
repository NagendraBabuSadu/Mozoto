import * as React from "react";
import type { ProfileInfo } from "../types";

export interface User {
  email: string;
  password: string;
}
type AuthData = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  updateProfile: (userProfile: ProfileInfo) => void;
};

export const userProfileUpdatedInfo = (userProfile: ProfileInfo) => {
  console.log("Profile Info: ", userProfile);
  return updateProfile(userProfile.user!, {
    displayName: userProfile.displayName,
    photoURL: userProfile.photoUrl,
  });
};

interface IUserAuthProviderProps {
  children: React.ReactNode;
}

export const UserAuthProvider: React.FunctionComponent<
  IUserAuthProviderProps
> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const isLoginSuccess = !!user; 

  const login = (email: string, password: string) => {
    const userData = { email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("userData");
    setUser(null);
  };

  const updateProfile = (userProfile: ProfileInfo) => {
    console.log("Profile Info:", userProfile);
  };

  React.useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const value: AuthData = {
    user,
    login,
    logout,
    updateProfile,
  };

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};

const UserAuthContext = React.createContext<AuthData | undefined>(undefined);

export const useUserAuth = () => {
  const context = React.useContext(UserAuthContext);
  if (!context) {
    throw new Error("useUserAuth must be with in a UserAuthProvider");
  }
  return context;
};


function updateProfile(arg0: any, arg1: { displayName: string; photoURL: string | undefined; }) {
  throw new Error("Function not implemented.");
}
// function updateProfile(arg0: any, arg1: { displayName: string; photoURL: string | undefined; }) {
//   throw new Error("Function not implemented.");
// }

