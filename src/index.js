import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Accueil,
  Notes,
  Recrutements,
  Rapports,
  Actus,
  Posts,
  Post,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/ni" element={<Notes />} />
      <Route path="/recrutements" element={<Recrutements />} />
      <Route path="/rapports" element={<Rapports />}></Route>
      <Route path="/actus" element={<Actus />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();