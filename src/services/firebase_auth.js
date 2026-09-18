import { GoogleAuthProvider, signInAnonymously, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase";

const sign_in_anonymous = async () => {
   return await signInAnonymously(auth)
    .then((user) => {
      const uid = user?.user.uid;
      console.log(uid)
      return uid;

    })
    .catch((e) => {
      return e.message;
    });
};

const sign_in_with_google = async()=>{
  try{

    const provider = new GoogleAuthProvider()

    const result = await signInWithPopup(auth, provider)

    const user = result.user

    const uid = user.uid
    console.log(uid)
    return uid


  }catch(e){
    return e
  }
}

const sign_out_anonymous = async()=>{
  return await signOut(auth).then(()=>{
    return 1
  }).catch(()=>{
    return 0
  })
}



export { sign_in_anonymous, sign_out_anonymous, sign_in_with_google  };
