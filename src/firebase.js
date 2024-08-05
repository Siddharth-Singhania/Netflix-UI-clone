import {getFirestore,addDoc, collection} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {toast} from "react-toastify";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmYM3VyoyG0XN0NCzBbmwSA9t0CMj6phM",
  authDomain: "netflix-clone-41e09.firebaseapp.com",
  projectId: "netflix-clone-41e09",
  storageBucket: "netflix-clone-41e09.appspot.com",
  messagingSenderId: "51784799547",
  appId: "1:51784799547:web:c259335f8588dcc388d31e"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signup = async(name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        console.log(user)
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        })
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const login = async (email,password) =>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        toast.error(error.message);
    }
}

const logout = ()=>{
    signOut(auth);
}



export {auth,db,login,signup,logout};
