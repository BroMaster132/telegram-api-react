import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: "AIzaSyCoaVsPNtrMlBJ1JYSD5s7EsxsQmGzubb8",
//   authDomain: "learn-vue-b1afe.firebaseapp.com",
//   projectId: "learn-vue-b1afe",
//   storageBucket: "learn-vue-b1afe.appspot.com",
//   messagingSenderId: "56216045727",
//   appId: "1:56216045727:web:914f3fb1644d7f51103aaa"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAENjT1pU2ZqIu1LvSKaBmpK63S0gevF4g",
  authDomain: "learn-vue2-54819.firebaseapp.com",
  projectId: "learn-vue2-54819",
  storageBucket: "learn-vue2-54819.appspot.com",
  messagingSenderId: "300467598422",
  appId: "1:300467598422:web:1db65117d9423b7f5377f7",
  measurementId: "G-RC3WXXZX7B"
};  

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }