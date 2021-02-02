import React from 'react';

const Filme = ({ movie }) => {
  
  const selectMovie = () => {
    const event = new CustomEvent('selectMovie', {
      detail: movie
    });

    window.dispatchEvent(event);
  }

  return (
    <li className="filme" onClick={selectMovie} data-toggle="modal" data-target="#modal-filme">
      <img className="img-fluid" src={movie?.thumb} alt="decorative" />
      <div className="filme_info">
        <div className="col-12">
          <a href="#" className="btn-custom-round btn btn-light rounded-circle">
            <span className="mdi mdi-play"></span>
          </a>
          <a href="#" className="btn-custom-round border-white btn rounded-circle opacity-50">
            <span className="mdi mdi-thumb-up text-white"></span>
          </a>
          <a href="#" className="btn-custom-round border-white btn rounded-circle opacity-50">
            <span className="mdi mdi-thumb-down text-white"></span>
          </a>
          <a href="#" className="btn-custom-round border-white btn rounded-circle opacity-50">
            <span className="mdi mdi-plus text-white"></span>
          </a>
        </div>
        <p>T3:EP5 <span>"Meu Episódio"</span></p>
      </div>
    </li>
  )
}

export default Filme;