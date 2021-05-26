const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const Productos = db.Product;
const Category = db.Category;
//const Actors = db.Actor;
//---------------------------
//
//----------------------------------

const productsAPIController = {
'ultimoProducto': (req, res) => {
    // const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;  
    //Promise.all([calzados,categorias])
    //.then(([calzados,categorias]) =>{
    //    res.render(path.resolve(__dirname , '..','views','product','products') , {calzados,categorias, styles:["master.css"], title:"Sandy - Catalogo de Productos"});
   // })           
   // .catch(error => res.send(error))


        Productos.findAll({
        limit: 1,
        order: [ [ 'id','DESC' ]],        
        })
        .then(products => {
                let respuesta = {
                meta: {
                    status: 200,
                    url: 'api/ultimoProducto',
                    count:1
                },
                countByCategory: "",
                products: products.map(product => {
                    return{
                        id: product.id,
                        name: product.nombre,
                        description: product.descripcion,
                        image: '/images/calzados/'+  product.imagen,
                        //Falta relacion 1 a muchos array
                        detail: `${fullUrl}/${product.id}`
                    }
                }) //Acá faltan poner las relaciones con la categoria 
            }
            res.json(respuesta);
        })
},

'list': (req, res) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;  
    
    
    Productos.findAll( {
        include: [ {association: 'category'} ]
    } )
    //const numcat=Category.count()
    //Promise.all([numcat,prods])
    //.then(([calzados,categorias]) =>{
    //    res.render(path.resolve(__dirname , '..','views','product','products') , {calzados,categorias, styles:["master.css"], title:"Sandy - Catalogo de Productos"});
   // })           
   // .catch(error => res.send(error))
     .then(prods => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: 'api/products',
                    count: prods.length
                },
                data: prods/*.map(product => {
                    return{
                        id: product.id,
                        name: product.title,
                        description: product.descripcion,
                        //Falta el array con principal relación de uno a muchos con categorias
                        detail: `${fullUrl}/${product.id}`,
                        image: '/images/calzados/'+  product.imagen,
                    }
                })*/ //Acá faltan poner las relaciones con la categoria y la URL para ver el detalle del producto.
            }
            res.json(respuesta);
        })
        //.catch(error => res.send(error))

},

'detail': (req, res) => {
    db.Product.findByPk(req.params.id, {
            include: ['category']
        })
        .then(product => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: product.length,
                    url: '/api/products/' + req.params.id,
                },
                product: product //Acá faltan poner las relaciones con las otras tablas y la URL para ver la imagen del producto.
            }
            res.json(respuesta);
        });
}

}

module.exports = productsAPIController;



/*

const productsAPIController = {
    'contar': (req, res) => {
        db.Product.count()
        .then(products => {  
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products/contar'
                },
                data: products
            }
                res.json(respuesta);
            })
    },
    'list': (req, res) => {
        db.Product.findAll()
        .then(products => {  
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products'
                },
                data: products
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(prod => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: prod.length,
                        url: '/api/products/:id'
                    },
                    data: prod
                }
                res.json(respuesta);
            });
    }/*,
    'genreMovies': (req, res) => {
        db.Genre.findByPk(req.params.id,{
            include: ['movies']
        })
            .then(genre => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: genre.length,
                        url: '/api/genre/:id/movies'
                    },
                    data: genre
                }
                res.json(respuesta);
            });
    }
}

module.exports = productsAPIController;

*/

/*
const db = require('../../database/models');

const productsAPIController = {

    'ultimoProductoCreado': (req, res) => {
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;  
        db.Product.findAll({
            limit: 1,
            order: [ [ 'id','DESC' ]],        
            })
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'api/ultimoProductoCreado'
                    },
                    count: 1,
                    countByCategory: "FALTA TERMINAR ESTO",
                    products: products.map(product => {
                        return{
                            id: product.id,
                            name: product.name,
                            description: product.shortDescription,
                            image: '/images/products/'+  product.image_1,
                            //Falta el array con principal relación de uno a muchos con categorias
                            detail: `${fullUrl}/${product.id}`
                        }
                    }) //Acá faltan poner las relaciones con la categoria 
                }
                res.json(respuesta);
            })
    },

    'list': (req, res) => {
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;  
        db.Product.findAll( {
            include: [ {association: 'categoria'} ]
        } )
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'api/products',
                    },
                    count: products.length,
                    countByCategory: {
                        Stands: products.filter(e => e.category_id == 4).length,
                        Mouses: products.filter(e => e.category_id == 9).length,
                        Sillas: products.filter(e => e.category_id == 1).length,
                         
                    },
                    products: products.map(product => {
                        return{
                            id: product.id,
                            name: product.name,
                            description: product.shortDescription,
                            //Falta el array con principal relación de uno a muchos con categorias
                            detail: `${fullUrl}/${product.id}`,
                            image: '/images/products/'+  product.image_1,
                        }
                    }) //Acá faltan poner las relaciones con la categoria y la URL para ver el detalle del producto.
                }
                res.json(respuesta);
            })

    },

    'detail': (req, res) => {
        db.Product.findByPk(req.params.id, {
                include: ['categoria']
            })
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/' + req.params.id,
                    },
                    product: product //Acá faltan poner las relaciones con las otras tablas y la URL para ver la imagen del producto.
                }
                res.json(respuesta);
            });
    }

}

module.exports = productsAPIController;


*/