import React, { useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function register(email, password) {
    return (
      auth
        .createUserWithEmailAndPassword(email, password)
        // .then(function(result) {
        //   return result.user.updateProfile({
        //     displayName: document.getElementById("name").value,
        //   });
        // })
        .catch(function(error) {
          console.log(error);
        })
    );
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
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
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
