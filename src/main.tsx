import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { AppContextProvider } from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //<React.StrictMode>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  // </React.StrictMode>
);
