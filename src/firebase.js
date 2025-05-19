import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { 
  getDatabase, 
  ref, 
  onValue, 
  set, 
  remove, 
  update 
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC-SPdB6xEpGgCpyUfX0M4V6iR0EuBZwJY",
  authDomain: "organo-react.firebaseapp.com",
  databaseURL: "https://organo-react-default-rtdb.firebaseio.com",
  projectId: "organo-react",
  storageBucket: "organo-react.appspot.com",
  messagingSenderId: "617662939353",
  appId: "1:617662939353:web:9b660e967eb55433d67ec8"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export const initAuth = async () => {
  await signInAnonymously(auth);
  console.log("Autenticado anonimamente");
};

export { 
  database, 
  ref, 
  onValue, 
  set, 
  remove, 
  update,
  auth,
  signInAnonymously
};