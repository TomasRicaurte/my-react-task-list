
import React from "react";
import SobreNosotros from "./Componentes/SobreNosotros";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tareas from "./Componentes/Tareas";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tareas />}/>
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
export default App;
