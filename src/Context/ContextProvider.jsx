import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../fierbase/fierbase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  

  const usercreat = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logingUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOuts = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const uinsubSripet = onAuthStateChanged(auth, (currentUser) => {
        setUsers(currentUser);
    });
    return () => {
        uinsubSripet();
    }
  }, [])
  const userInfo = {
    usercreat,
    logingUser,
    signOuts,
    users
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
