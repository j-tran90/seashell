import React, { useContext, useEffect, useState } from "react";
import { auth } from "../config/Firebase";
import {
  getAuth,
  deleteUser,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  function register(email, password) {
    return (
      auth
        .createUserWithEmailAndPassword(email, password)
        // TO FIX //
        .then(function (result) {
          return result.user.updateProfile({
            displayName: document.getElementById("name").value,
          });
        })
        .catch(function (error) {
          console.log(error);
        })
    );
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const googleLogin = () => {
    const auth2 = getAuth();

    signInWithPopup(auth2, provider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  function logout() {
    return auth.signOut();
  }

  // TO FIX //
  function deleteAccount() {
    const auth2 = getAuth();
    const user = auth2.currentUser;

    deleteUser(user)
      .then(() => {})
      .catch((error) => {
        ("Deletion Failed");
      });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    register,
    logout,
    deleteAccount,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
