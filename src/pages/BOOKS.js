import React from 'react';
import Herro from "../components/Herro";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
const BOOKS = () =>{
  return <Herro hero="booksHero" >
      <Banner title="Our Books">
          <Link to="/" className="btn-primary">return Home</Link>
      </Banner>
  </Herro>
}

export default BOOKS;