import React from 'react';
import { Link } from 'react-router-dom'
import '../../Pages/Error/error.scss'
import errorImage from '../../assets/error.png'

const Error = () => {
  return (
    <div className='container'>
      <div className='content'>
          <img src={errorImage} alt="ErreurImage"/>
      </div>
      <h1>Oups! la page que vous demandez n'existe pas </h1>
      <Link to="/" className='accueil'>
          <p>Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
};

export default Error;