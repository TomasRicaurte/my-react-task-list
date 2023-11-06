import "./App.css";
import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import { Home } from "./Componentes/Home";
import { SobreNosotros } from "./Componentes/SobreNosotros";
import { Tareas } from "./Componentes/Tareas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre-nosotros" element={<SobreNosotros />}/>
          <Route path="/tareas" element={<Tareas />}/>
        </Router>
      </BrowserRouter>
    </>
  );
}
export default App;
