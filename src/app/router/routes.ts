import SignIn from "@pages/auth/ui/SignIn.vue";
import Home from "../../pages/home/ui/Home.vue";
import Tasks from "../../pages/tasks/ui/Tasks.vue";

export const routes = [
  { path: "/home", component: Home, name: "Home" },
  { path: "/:pathMatch(.*)*", name: "Home", component: Home },
  {
    path: "/settings",
    component: () => import("@pages/settings/ui/Settings.vue"),
    name: "Settings",
  },
  { path: "/tasks", component: Tasks, name: "Tasks" },
  {
    path: "/profile",
    component: () => import("@pages/profile/ui/profile.vue"),
    name: "Profile",
  },
  {
    path: "/signin",
    component: SignIn,
    name: "signin",
    children: [
      { path: "auth", component: () => import("@pages/auth/ui/auth.vue") },
      { path: "regist", component: () => import("@pages/auth/ui/regist.vue") },
    ],
  },
];
