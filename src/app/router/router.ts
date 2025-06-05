import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

router.beforeEach(async (to) => {
  const auth = getAuth();

  try {
    const user = await new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      });
    });

    const isAuthPage = ["auth", "regist"].includes(to.name as string);

    if (!user && !isAuthPage) {
      return { name: "auth" };
    }

    if (user && isAuthPage) {
      return { name: "home" };
    }

    return true;
  } catch (error) {
    console.error("Auth check failed:", error);
    return { name: "auth" };
  }
});
