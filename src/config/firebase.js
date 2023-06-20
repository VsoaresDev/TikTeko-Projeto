
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC-fTPbfH3QAfHs4c8mNaU2qb8-D_KObWs",
  authDomain: "tiktok-jornada-vsoares.firebaseapp.com",
  projectId: "tiktok-jornada-vsoares",
  storageBucket: "tiktok-jornada-vsoares.appspot.com",
  messagingSenderId: "900777210307",
  appId: "1:900777210307:web:43e6bc3de266e154148d76"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;