import React, { useState, useEffect } from 'react';

import ModalFilme from '../../components/ModalFilme';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

import api from '../../services/api';

const Home = () => {

  const [mainMovie, setMainMovie] = useState({});
  const [movieSections, setMovieSections] = useState([]);

  const getHome = async () => {
    try { 
      const response = await api.get('/home');
      const res = response.data

      if(res.error) {
        alert(res.mensagem)
        return false;
      }

      setMainMovie(res.principal);
      setMovieSections(res.secoes);

    } catch(err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    getHome();
  }, []);

  return (
    <>
      <ModalFilme />

      <div className="container-fluid">
        <Header />
      </div>

      <Hero movie={mainMovie} />

      <div id="main-content">
        { movieSections.map(section => <Section section={section} />) }        
      </div>
    </>
  )
};

export default Home;