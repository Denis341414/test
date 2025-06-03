import { UserCurrent } from "@shared/types";
import { validateEmailAndPassword } from "@shared/utils";
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const registUser = async (
  email: string,
  password: string,
  repPassword: string,
  name: string,
  auth: Auth
) => {
  try {
    if (password !== repPassword) {
      alert("Пароли не совпадают");
      throw new Error("ERROR: пароли не совпадают");
    }
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user.user, {
      displayName: name,
    });
  } catch (error) {
    console.log("ERROR :", error);
    throw error;
  }
};
