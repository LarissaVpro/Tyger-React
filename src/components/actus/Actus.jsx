import React from "react";
import { Outlet } from "react-router-dom";

function Actus() {
  return (
    <div className="Accueil">
      <div class="container">
        <h1 className="text-center mt-5">Actus page</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Actus;