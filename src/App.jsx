import React from "react";
import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import ListadoPacientes from "./components/ListadoPacientes.jsx";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <Formulario />
      <ListadoPacientes />
    </div>
  );
}

export default App;
