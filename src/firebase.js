
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAFWjmE5YpuwM0qwo27OuujKRKOjsK5qIA",
  authDomain: "netflix-clone-3055b.firebaseapp.com",
  projectId: "netflix-clone-3055b",
  storageBucket: "netflix-clone-3055b.firebasestorage.app",
  messagingSenderId: "581907270599",
  appId: "1:581907270599:web:198e333ad55d8c63be27e2"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db = getFirestore(app)

const signup=async (name,email,password)=>{
   try {
    const response=await createUserWithEmailAndPassword(auth,email,password);
    const user = response.user
    await addDoc(collection(db,'user'),{
        uid:user.uid,
        name,
        authProvider:'local',
        email,
    })
   } catch (error) {
  console.error("Signup Error:", error.code, error.message);
  toast.error(
    error.code === "auth/email-already-in-use"
      ? "Email already in use"
      : error.code.split("/")[1].split("-").join(" ")
  );
}

}

const login =async (email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error.code,error.message);
         toast.error(error.code.split('/')[1].split("-").join(' '))
    }
}

const logout=async()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout}