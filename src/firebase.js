// import { initializeApp } from "firebase/app";
// import { getFirestore,serverTimestamp } from "@firebase/firestore"
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC3CnrY6n2Y3GlUehJ4d44XqdCZbxeqK-Y",
//   authDomain: "linkedin-clone-ba498.firebaseapp.com",
//   projectId: "linkedin-clone-ba498",
//   storageBucket: "linkedin-clone-ba498.appspot.com",
//   messagingSenderId: "206018658232",
//   appId: "1:206018658232:web:cda4c2bc650bd4b6e4194d"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)

// export {db, serverTimestamp}
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC3CnrY6n2Y3GlUehJ4d44XqdCZbxeqK-Y",
  authDomain: "linkedin-clone-ba498.firebaseapp.com",
  projectId: "linkedin-clone-ba498",
  storageBucket: "linkedin-clone-ba498.appspot.com",
  messagingSenderId: "206018658232",
  appId: "1:206018658232:web:cda4c2bc650bd4b6e4194d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, db, serverTimestamp, updateProfile,signInWithEmailAndPassword };