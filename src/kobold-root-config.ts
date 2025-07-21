import { LifeCycles, registerApplication, start } from "single-spa";

registerApplication({
  name: "@kobold/konekt-react-app",
  app: () => System.import<LifeCycles>("@kobold/konekt-react-app"),
  activeWhen: ["/mfe/hello"],

  customProps: {
    domElementGetter: () => {
      const el = document.getElementById("kobold-konekt-react-app-root");
      if (!el) {
        throw new Error(
          "Container #kobold-konekt-react-app-root não encontrado"
        );
      }
      return el;
    },
  },
});

start({
  urlRerouteOnly: true,
});
