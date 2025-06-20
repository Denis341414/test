import { UserCurrent } from "@shared/types";
import { validateEmailAndPassword } from "@shared/utils";
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Ref } from "vue";

export const registUser = async (
  email: string,
  password: string,
  repPassword: string,
  name: string,
  auth: Auth,
  loader: Ref<boolean>
) => {
  loader.value = true;
  try {
    if (password !== repPassword) {
      alert("Пароли не совпадают");
      throw new Error("ERROR: пароли не совпадают");
    }
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user.user, {
      displayName: name,
    });
    localStorage.setItem("username", String(user.user.displayName));
  } catch (error) {
    console.log("ERROR :", error);
    throw error;
  } finally {
    loader.value = false;
  }
};
