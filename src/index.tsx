import { ReactNode } from "react";
import ReactDOM from "react-dom/client";

// Assets
import "./index.css";

// Components
import App from "./App";

// Providers
import { ThemeProvider } from "./providers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const app: ReactNode = (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

root.render(app);
