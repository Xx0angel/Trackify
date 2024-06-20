import React, { useState, useEffect } from 'react';
import Button from './buttons'
import '../styles/header.css'


const Header = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  useEffect(() => {
    // Función para manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      // Mostrar el menú si el ancho de la ventana es mayor o igual a 1280px
      if (window.innerWidth >= 1280) {
        setMostrarMenu(true);
      } else {
        setMostrarMenu(false);
      }
    };

    // Agregar un listener para el evento resize
    window.addEventListener('resize', handleResize);

    // Limpieza del listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div className="menu-hamburguesa">
      <h1>Trackify</h1>
      <button className="boton-hamburguesa" onClick={toggleMenu}>
        ☰
      </button>
      {mostrarMenu && (
        <div className="menu">
          <ul>
            <Button texto="Inicio" />
            <Button texto="Acerca" />
            <Button texto="Acceder" />
            <Button texto="Registrarte" />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header