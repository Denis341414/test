import { Auth, createUserWithEmailAndPassword } from "firebase/auth";

export const registUser = async (
  email: string,
  password: string,
  repPassword: string,
  auth: Auth
) => {
  try {
    if (password !== repPassword) {
      throw new Error("ERROR: пароли не совпадают");
    }
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log(user);
      }
    );
  } catch (error) {
    console.log("ERROR :", error);
    throw error;
  }
};
