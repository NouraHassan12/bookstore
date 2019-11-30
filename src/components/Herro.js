import React from 'react';
// import {Carousel ,} from 'react-bootstrap'
export default function Herro({children,hero}){
    return(
       <header className={hero}>{children} </header>

    )

}

Herro.defaultProps={
herro:'defaultHero'
}