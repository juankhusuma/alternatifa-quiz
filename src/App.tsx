import { useAuthState } from "react-firebase-hooks/auth";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./lib/firebase";

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
      {JSON.stringify(user)}
      {user ? (
        <button onClick={() => signOut(auth)}>Sign Out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign In</button>
      )}
    </div>
  );
}

export default App;
