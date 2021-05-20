import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Total de productos',
    color: 'primary', 
    cuantity: 30,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total de categorías', 
    color:'success', 
    cuantity: '15',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Total de usuarios' ,
    color:'warning',
    cuantity:'45',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function kpis(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default kpis;

