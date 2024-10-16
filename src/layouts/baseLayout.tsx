import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function BaseLayout() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      <footer style={{ backgroundColor: "#f8f9fa", marginTop: "auto" }}>
        &copy; 2022 Movie App. All rights reserved. Designed by Majid
      </footer>
    </>
  );
}
