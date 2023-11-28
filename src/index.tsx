import "./index.css";

import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./App";

const root = document.getElementById("root");

const BACKEND_ENDPOINT = "https://api.hangugeo.rafailmedzhidov.ru";

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

console.log(
  `
    ╦═╗╔═╗╔═╗╔═╗╦╦    ╔╦╗╔═╗╔╦╗╔═╗╦ ╦╦╔╦╗╔═╗╦  ╦
    ╠╦╝╠═╣╠╣ ╠═╣║║    ║║║║╣  ║║╔═╝╠═╣║ ║║║ ║╚╗╔╝
    ╩╚═╩ ╩╚  ╩ ╩╩╩═╝  ╩ ╩╚═╝═╩╝╚═╝╩ ╩╩═╩╝╚═╝ ╚╝
  `,
);

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  root,
);

export { BACKEND_ENDPOINT };
