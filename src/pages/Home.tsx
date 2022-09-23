import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth } from "../lib/firebase";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  return <div></div>;
}
