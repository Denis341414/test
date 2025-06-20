import { validateEmailAndPassword } from "@shared/utils";
import { signInWithEmailAndPassword, type Auth } from "firebase/auth";
import { Ref } from "vue";

export const authUser = async (
  email: string,
  password: string,
  auth: Auth,
  loader: Ref<boolean>
) => {
  loader.value = true;
  try {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const currentUser = auth.currentUser;
        console.log(user);
      })
      .catch((error) => {
        alert(validateEmailAndPassword(error.code));
      });
  } catch (error) {
    console.error("ERROR :", error);
    throw error;
  } finally {
    loader.value = false;
  }
};
