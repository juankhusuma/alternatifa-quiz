import { useAuthState } from "react-firebase-hooks/auth";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./lib/firebase";
import ActionButton from "./components/ActionButton";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const auth = getAuth(app);

function App() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const [user, loading, error] = useAuthState(auth);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      <Navbar />
      {JSON.stringify(user)}
      {user ? (
        <ActionButton text="Sign Out" onClick={() => signOut(auth)} />
      ) : (
        <ActionButton text="Sign In" onClick={() => signInWithGoogle()} />
      )}
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
