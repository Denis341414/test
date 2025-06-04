import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

// router.beforeEach(async (to, from) => {
//   if (

//   ) {
//     return { name: "home" };
//   }
// });
