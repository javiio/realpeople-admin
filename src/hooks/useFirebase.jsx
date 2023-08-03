import React, {
  useRef,
  createContext,
  useEffect,
  useContext,
} from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDocs,
  collection,
  setDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { clientCredentials } from "./firebaseCredentials";

const FirebaseContext = createContext();

export const ProvideFirebase = ({ children }) => {
  const firebaseApp = useRef();
  const db = useRef();

  useEffect(() => {
    if (!firebaseApp.current) {
      const app = initializeApp(clientCredentials);
      firebaseApp.current = app;
      db.current = getFirestore(app);
    }
  }, []);

  const loadUsers = async () => {
    const arr = [];
    const q = query(collection(db.current, "teams", "realpeople", "users"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((d) => {
      arr.push({ ...d.data(), id: d.id });
    });

    return arr;
  };

  const loadRegistrations = async () => {
    const arr = [];
    const q = query(collection(db.current, "teams", "realpeople", "registrations"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((d) => {
      arr.push({ ...d.data(), id: d.id });
    });

    return arr;
  };

  const loadCollection = async (...path) => {
    const arr = [];
    const querySnapshot = await getDocs(collection(db.current, "teams", "realpeople", ...path));

    querySnapshot.forEach((d) => {
      arr.push({ ...d.data(), id: d.id });
    });

    return arr;
  };

  const collectionLive = (callback, ...path) => {
    const c = collection(db.current, "teams", "realpeople", ...path);
    const unsubscribe = onSnapshot(c, (querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((d) => arr.push({ ...d.data(), id: d.id }));
      callback(arr);
    });

    return unsubscribe;
  };

  const userCollectionLive = (user, callback, ...path) => collectionLive(callback, "users", user.id, ...path);

  const save = async (data, ...path) => {
    await setDoc(doc(db.current, "teams", "realpeople", ...path), data, { merge: true });
  };

  const value = {
    loadUsers,
    loadRegistrations,
    loadCollection,
    collectionLive,
    userCollectionLive,
    save,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
