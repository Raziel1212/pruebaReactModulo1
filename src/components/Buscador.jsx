import React from "react";

const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <input 
    className="col-sm-10 ms-5"
      type="text"
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      placeholder="Buscar personaje"
    />
  );
};

export default Buscador;
