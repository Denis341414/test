import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

router.beforeEach(async (to, from, next) => {
  const auth = getAuth();

  const user = await new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });

  if (!user && to.name !== "auth") {
    return next({ name: "auth" });
  }
  return next();
});
