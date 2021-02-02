import React, { useEffect, useState } from 'react';
import Episodio from '../Episodio';
import api from '../../services/api';

const ModalFilme = () => {

  const [movie, setMovie] = useState({});
  const [episodes, setEpisodes] = useState([]);

  const selectMovieListener = () => {
    window.addEventListener('selectMovie', (data) => {
      setMovie(data.detail);
    });
  }

  const getEpisodes = async (temporadaId) => {
    try {
      const response = await api.get(`/episodios/temporada/${temporadaId}`);
      const res = response.data

      if(res.error) {
        alert(res.mensagem)
        return false;
      }

      console.log(res.episodios);

      setEpisodes(res.episodios);

    } catch(err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    selectMovieListener();
  }, []);

  useEffect(() => {
    if(movie.tipo == "serie") {
      getEpisodes(movie.temporadas[0]?._id);
    }
  }, [movie]);

  return (
    <div className="modal fade" id="modal-filme">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-hero" style={{
            backgroundImage: `url(${movie?.capa})`
          }}>
            <img src={movie?.logo} alt="decorative" />
            <div className="col-12 modal-hero-infos">
              <button className="btn btn-lg btn-custom-white">
                <span className="mdi mdi-play"></span> Assistir
              </button>
              <a href="#" className="btn-custom-round btn btn-lg btn-light rounded-circle">
                <span className="mdi mdi-play"></span>
              </a>
              <a href="#" className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
                <span className="mdi mdi-thumb-up text-white"></span>
              </a>
              <a href="#" className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
                <span className="mdi mdi-thumb-down text-white"></span>
              </a>
            </div>
          </div>
          <div className="modal-infos">
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <p className="filme_descricao">{movie?.descricao}</p>
                </div>
                <div className="col-5">
                  <p className="filme_elenco">
                    Elenco: <span>{ movie.elenco?.join(', ') }</span>
                    <br />
                    <br />
                    Gêneros: <span>{ movie.generos?.join(', ') }</span>
                    <br />
                    <br />
                    Cenas e momentos: <span>{ movie.cenas_momentos?.join(', ') }</span>
                  </p>
                </div>
              </div>
              <br />
              {movie.tipo == "serie" && <>
                <div className="row">
                  <div className="col-7">
                    <h3 className="text-white">Episódios</h3>
                  </div>
                  <div className="col-5 text-right">
                    <select className="form-control" onChange={(e) => {
                      getEpisodes(e.target.value)
                    }}>
                      {movie.temporadas?.map(season =>
                        <option value={season._id}>{season.titulo}</option>
                      )}
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                <ul id="lista_episodeos">
                  {episodes.map((episode) => <Episodio episode={episode}/>)}
                </ul>
              </div>
              </>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalFilme;