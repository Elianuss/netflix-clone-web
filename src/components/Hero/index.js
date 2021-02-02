import React from 'react';
import Filme from '../Filme';

const Hero = ({ movie }) => {

  return (
    <div id="hero" className="container-fluid" style={{
      backgroundImage: `url(${movie?.capa})`
    }}>
      <div className="container">
        <div className="row" id="hero_infos">
          <div className="col-6">
            <img className="logo" src={movie?.logo} alt="decorative" />
            <h1 className="text-white">
              <img src={require("../../assets/badge-top-10.png").default} alt="decorative" />Top 1 de hoje no Brasil.
            </h1>
            <p className="text-white">
              {movie?.descricao?.substr(0, 190)}...
            </p>
            <br />
            <button className="btn btn-lg btn-custom-white">
              <span className="mdi mdi-play"></span> Assistir
            </button>
            <button className="btn btn-lg btn-custom-translucent">
              <span className="mdi mdi-information-outline"></span> Mais Informações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;