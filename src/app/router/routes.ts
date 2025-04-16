import Profile from "@pages/profile/ui/profile.vue";
import Home from "../../pages/home/ui/Home.vue";
import Settings from "../../pages/settings/ui/Settings.vue";
import Tasks from "../../pages/tasks/ui/Tasks.vue";

export const routes = [
  { path: "/home", component: Home, name: "Home" },
  { path: "/settings", component: Settings, name: "Settings" },
  { path: "/tasks", component: Tasks, name: "Tasks" },
  { path: "/profile", component: Profile, name: "Profile" },
];
