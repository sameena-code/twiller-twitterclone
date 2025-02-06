import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "./firbase";
import { createContext,useContext,useEffect,useState } from "react";
export const userAuthContext=createContext();
export function UserAuthContextProvider({children}){
    const [user,setUser]=useState([])
        function login(email,password){
            return signInWithEmailAndPassword(auth,email,password)
        }
function signin(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}
  function logout(){
    return signOut(auth)
  }   
function googlesignin(){
    const googleauthprovider=new GoogleAuthProvider();
    return signInWithPopup(auth,googleauthprovider)
}
useEffect(()=>{
 const Unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
    console.log("Auth",currentuser);
    setUser(currentuser);
 }) ;
 return()=>{
    Unsubscribe();
 }  ;

},[]);
return(
    <userAuthContext.Provider  value={{user,login,signin,logout,googlesignin}}>
        {children}
    </userAuthContext.Provider>
);

}
export function useUserAuth(){
    return useContext(userAuthContext);
}