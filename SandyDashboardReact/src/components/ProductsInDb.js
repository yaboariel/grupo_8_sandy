import React, {useState,  useEffect} from 'react';
import Products  from './Products';



function ProductsInDb(){
    const [productList, setProductList] = useState([]);


     useEffect( ()=> {
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(data =>{
          console.log(data)
            setProductList(data.products)
        })
        .catch(error => console.log(error))
    },[])

    
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Listado de productos</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    productList.map((product,index)=>{
                                        return  <Products  {...product}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
     
    )
       
}
export default ProductsInDb;