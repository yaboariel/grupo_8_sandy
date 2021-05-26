/*import React from 'react';
import SmallCard from './SmallCard';
*/
/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */
/*
let moviesInDB = {
    title: 'Total de productos',
    color: 'primary', 
    cuantity: 30,
    icon: 'fa-clipboard-list'
}*/

/* <!-- Total awards --> */
/*
let totalAwards = {
    title:' Total de categorías', 
    color:'success', 
    cuantity: '15',
    icon:'fa-award'
}
*/
/* <!-- Actors quantity --> */
/*
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
*/


import React, {useState,  useEffect} from 'react';
import SmallCard from './SmallCard';


/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

/* <!-- codigo a poner --> */

function Kpis(){

    const [productList, setProductList] = useState([]);

     useEffect( ()=> {
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(data =>{
            console.log(data.data[0].title+"---------------------------")
            setProductList(data.data)
        })
        .catch(error => console.log(error))
    },[])
/*
    const [userList, setUserList] = useState([]);

    useEffect( ()=> {
       fetch('/api/users')
       .then(respuesta =>{
           return respuesta.json()
       })
       .then(data =>{
            setUserList(data)
       })
       .catch(error => console.log(error))
   },[])

*/
   
    let moviesInDB = {
        title: 'Total de productos',
        color: 'primary', 
        cuantity: productList.length,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let totalAwards = {
        title:' Total de categorías', 
        color:'success', 
        cuantity: 0 ,
        icon:'fa-award'
    }
    
    /* <!-- Actors quantity --> */
    
    let actorsQuantity = {
        title:'Total de usuarios' ,
        color:'warning',
        cuantity: 3 /*userList.users ? userList.users.length : 0*/,
        icon:'fa-user-check'
    }
    
    let cartProps = [moviesInDB, totalAwards, actorsQuantity];
    

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
         
    )
}

export default Kpis;