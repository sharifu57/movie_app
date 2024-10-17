import { RouterProvider } from "react-router-dom";
import "./App.css";
import * as ReactDOM from "react-dom/client";
import React from "react";
import { routes } from "./routes/routes";

function App() {
  return <RouterProvider router={routes} />;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
