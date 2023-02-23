import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS9tqj_Syz_2Yzm0SE3uxJcs53H9Lm1WU",
  authDomain: "buzzzz-69bdb.firebaseapp.com",
  projectId: "buzzzz-69bdb",
  storageBucket: "buzzzz-69bdb.appspot.com",
  messagingSenderId: "599581174099",
  appId: "1:599581174099:web:cd9f92996fb9ac03a459a6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()