import React from 'react';
import Filme from '../Filme';

const Section = ({ section }) => {

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h5 className="text-white">{section[0]?.generos[0]}</h5>
          </div>
        </div>
      </div>
      <div className="col-12">
        <ul className="filme_lista">
          { section?.map( movie => <Filme movie={movie} />) }
        </ul>
      </div>
    </section>
  )
}

export default Section;