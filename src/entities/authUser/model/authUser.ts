import { signInWithEmailAndPassword, type Auth } from "firebase/auth";

export const authUser = async (email: string, password: string, auth: Auth) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("ERROR :", error);
    throw error;
  }
};
