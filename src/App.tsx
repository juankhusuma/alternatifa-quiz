import { useAuthState } from "react-firebase-hooks/auth";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { app, firestore } from "./lib/firebase";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, getDoc, doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const auth = getAuth(app);

function App() {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    (async () => {
      if (user) {
        const profileRef = doc(firestore, "profiles", user?.uid as string);
        const profiles = await getDoc(profileRef);
        if (!profiles.data()) {
          await setDoc(profileRef, { roles: "user" });
        }
        setProfile(() => profiles.data());
      }
    })();
  }, [user]);

  return (
    <div>
      <Navbar />
      {profile && JSON.stringify(profile)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
