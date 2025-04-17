import Home from "../../pages/home/ui/Home.vue";
import Tasks from "../../pages/tasks/ui/Tasks.vue";

export const routes = [
  { path: "/", component: Home, name: "Home" },
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
];
