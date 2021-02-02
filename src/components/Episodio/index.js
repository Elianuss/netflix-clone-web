import React from 'react';

const Episodio = ({ episode }) => {

  return (
    <li>
      <div className="row">
        <div className="col-1 my-auto text-center">
          <h3 className="text-white">{episode.numero}</h3>
        </div>
        <div className="col-4">
          <img className="img-fluid" src={episode.capa} alt="decorative" />
        </div>
        <div className="col-7">
          <h6 className="text-white">{episode.titulo}</h6>
          <p className="text-muted">{episode.descricao}</p> 
        </div>
      </div>
    </li>
  );
}

export default Episodio;