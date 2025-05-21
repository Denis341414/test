import { getAuth } from "firebase/auth";

export const keyMenu = [
  {
    label: "Home",
    icon: "pi pi-palette",
    route: "/home",
  },
  {
    label: "Settings",
    icon: "pi pi-palette",
    route: "/settings",
  },
  {
    label: "Tasks",
    icon: "pi pi-palette",
    route: "/tasks",
  },
  {
    label: "Profile",
    icon: "pi pi-palette",
    route: "/profile",
  },
  {
    label: "Logout",
    icon: "pi pi-palette",
    route: "/signin/auth",
    command: async () => {
      const auth = getAuth();
      await auth.signOut();
      window.location.reload();
    },
  },
];
