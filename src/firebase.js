import { initializeApp } from "firebase/app";
import { 
  getDatabase, 
  ref, 
  onValue, 
  set, 
  remove 
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

export { 
  database,
  ref,   
  onValue,
  set,
  remove
};