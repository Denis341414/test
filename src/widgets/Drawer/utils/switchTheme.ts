export const SwitchTheme = () => {
  switch (document.body.style.background) {
    case "":
      document.body.style.background = "#3b3b3be4";

      document.querySelector(".header")?.classList?.remove("!bg-green-500");
      document.querySelector(".header")?.classList?.add("!bg-green-700");

      document.querySelector(".btn-drawer")?.classList.remove("!bg-green-500");
      document.querySelector(".btn-drawer")?.classList.add("!bg-green-700");

      break;
    case "rgba(59, 59, 59, 0.894)":
      document.body.style.background =
        "linear-gradient(rgb(145, 145, 145), rgb(178, 178, 178))";

      document.querySelector(".header")?.classList?.remove("!bg-green-700");
      document.querySelector(".header")?.classList?.add("!bg-green-500");

      document.querySelector(".btn-drawer")?.classList?.remove("!bg-green-700");
      document.querySelector(".btn-drawer")?.classList?.add("!bg-green-500");

      console.log(document.querySelector(".drawer")?.classList);

      break;
    case "linear-gradient(rgb(145, 145, 145), rgb(178, 178, 178))":
      document.body.style.background = "rgba(59, 59, 59, 0.894)";

      document.querySelector(".header")?.classList?.remove("!bg-green-500");
      document.querySelector(".header")?.classList?.add("!bg-green-700");

      document.querySelector(".btn-drawer")?.classList?.remove("!bg-green-500");
      document.querySelector(".btn-drawer")?.classList?.add("!bg-green-700");

      break;
  }
};
