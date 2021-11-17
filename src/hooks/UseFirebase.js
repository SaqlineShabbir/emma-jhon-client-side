import { useState,useEffect } from "react"

import { GoogleAuthProvider ,getAuth, signInWithPopup,onAuthStateChanged, signOut} from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";


initializeAuthentication()

const useFirebase =() =>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    
const signInUsingGoogle =() =>{
    setIsLoading(true)
  return  signInWithPopup(auth, googleProvider)



   }

  const logOut = () => {
      setIsLoading(true)
      signOut(auth)
      .then(()=>{
         setUser({})
      })
      .finally( ()=>{
          setIsLoading(false)
      })

  }

   useEffect( ()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
        setUser(user)
        } 
        setIsLoading(false)
      })
   },[])

   return {
       user,
       signInUsingGoogle,
       logOut,
       setIsLoading,
       isLoading
   }
}

export default useFirebase;