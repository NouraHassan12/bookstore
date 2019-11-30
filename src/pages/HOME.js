import React from 'react';
import Herro from '../components/Herro';
import Banner from '../components/Banner';
import Featuerdbooks from '../components/Featuerdbooks';
import {Link} from 'react-router-dom';
import Styledhero from '../components/Styledhero';
export default function HOME() {


    return(
        <>
        <Herro hero="defaultHero">
        <Banner title="Keep Reading" subtitle="Reading is The best For get Idea">
          {/* <Link to="/books" className="btn-primary">Our Books</Link> */}
        </Banner>
           </Herro>
           <Featuerdbooks />
           {/* <Styledhero /> */}
           </>
    )

   
 
 
 
    

  
    
}