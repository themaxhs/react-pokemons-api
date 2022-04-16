import React from "react";

const Pokemons = ({ id, name, image, type }) => {
    const style = `thumb-container ${type}`
  return (
    <div className={type}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Tipo: {type}</small>
      </div>
    </div>
  );
};

export default Pokemons;
