import { createRoot } from "react-dom/client";
import OnePage from "./components/OnePage";
const container = document.getElementById("app");
const root =createRoot(container);
root.render(<OnePage/>);
