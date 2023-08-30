import React, { useState, useEffect } from "react";
import Buscador from "./Buscador"; 

const MiApi = () => {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    obtenerDatos();
  }, []);

  const filtrarPersonajes = (item) => {
    return item.name.toLowerCase().includes(busqueda.toLowerCase());
  };

  const ordenar = (a, b) => {
    return a.name.localeCompare(b.name);
  };

  const obtenerDatos = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetch(url);
    const data = await response.json();

    const listaOrdenada = data.results.sort(ordenar);

    setPersonajes(listaOrdenada);
  };

  return (
    <div>
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
      
      <div className="d-flex flex-wrap">
        {personajes.filter(filtrarPersonajes).map((item) => (
          <div
            key={item.id}
            className="d-inline-flex align-items-center flex-column border border-warning border-4 rounded m-2 p-1"
          >
            <div>{item.name}</div>
            <div className="border-0">
              <img className="rounded" src={item.image} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MiApi;