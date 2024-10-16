import { RouterProvider } from "react-router-dom";
import "./App.css";
import * as ReactDOM from "react-dom/client";
import React from "react";
import { routes } from "./routes/routes";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return <RouterProvider router={routes} />;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId="846944510671-0b90i3jp6sfgb4umvirb08q1bh27vcd5.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

export default App;
