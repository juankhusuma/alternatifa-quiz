import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import ActionButton from "./ActionButton";

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

export default function Navbar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav className="flex shadow-md justify-between">
      <h1 className="font-bold bg-yellow-400 py-3 px-5">Alternatifa Quiz</h1>
      <ul className="flex items-center">
        {user && (
          <img
            className="mr-3 rounded-full"
            width="30px"
            src={user.photoURL as string}
            alt="Profile Pic"
          />
        )}
        <li>
          {loading ? (
            <div>Loading...</div>
          ) : user ? (
            <ActionButton text="Sign Out" onClick={() => signOut(auth)} />
          ) : (
            <ActionButton text="Sign In" onClick={signInWithGoogle} />
          )}
        </li>
      </ul>
    </nav>
  );
}
