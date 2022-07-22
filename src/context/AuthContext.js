import { createContext, useContext, useEffect, useState,} from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOut=(email, password) =>{
    return signOut(auth,email ,password);
  }

  return (
    <UserContext.Provider value={{ createUser, signIn,signOut }}>
      {children}
    </UserContext.Provider>
  );
};
export function useAuth(){
  const[currentUser,setcurrentUser]=useState();
  useEffect(() => {
    const unsub =onAuthStateChanged(auth,(user)=>setcurrentUser(user))
    return unsub
  },[]);
  return currentUser;
}

export const UserAuth = () => {
  return useContext(UserContext);
};
