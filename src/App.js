import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import AddDream from "./components/AddDream";
import AddDreamer from "./components/AddDreamer";
import DreamList from "./components/DreamList";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPenSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faPenSquare, faTrashAlt);

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={DreamList} />
        <Route path="/add-dream" exact component={AddDream} />
        <Route path="/dreamer" exact component={AddDreamer} />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
