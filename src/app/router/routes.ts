import SignIn from "@pages/signin/ui/SignIn.vue";
import Home from "../../pages/home/ui/Home.vue";
import Profile from "@pages/profile/ui/profile.vue";

export const routes = [
  { path: "/home", component: Home, name: "Home" },
  { path: "/:pathMatch(.*)*", name: "Home", component: Home },
  {
    path: "/settings",
    component: () => import("@pages/settings/ui/Settings.vue"),
    name: "Settings",
  },
  {
    path: "/tasks",
    component: () => import("@pages/tasks/ui/Tasks.vue"),
    name: "Tasks",
  },
  {
    path: "/profile",
    component: Profile,
    name: "Profile",
  },
  {
    path: "/signin",
    component: SignIn,
    name: "signin",
    children: [
      {
        path: "auth",
        name: "auth",
        component: () => import("@pages/signin/ui/auth.vue"),
        meta: { transition: "slide-right" },
      },
      {
        path: "regist",
        name: "regist",
        component: () => import("@pages/signin/ui/regist.vue"),
        meta: { transition: "slide-right" },
      },
    ],
  },
];
