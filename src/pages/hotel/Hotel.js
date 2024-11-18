import '../../App.css';
import React from "react";
import HotelPhotos from "./HotelPhotos";



function Hotel() {
  return (
      <div>
        <p>Aqui tem algumas fotos da casa onde vamos ficar</p>
        <p>É bem simples, mas um espaço legal.</p>
        <p>A ideia seria pegar um lugar onde conseguissemos ficar juntos e aproveitar o espaço também</p>
        <HotelPhotos></HotelPhotos>
      </div>
  );
}

export default Hotel;
