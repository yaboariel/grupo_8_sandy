const express=require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

//Aqui requiero los paquetes para trabajar lo referido a session y cookies
const session = require('express-session');
const cookieParser = require('cookie-parser');
//Requerir nuestro middleware - Aplicación
//Requiero el middleware que controla si el sitio está o no culminado
const mantenimiento = require('./middlewares/mantenimiento');
//Requerir el middleware que controla si el usuario está o no Logueado
const acceso = require('./middlewares/acceso');
const carritoCantidadMiddleware = require('./middlewares/carritoCantidad');
/*
const indexRouter = require('./routes/index');
*/



app.set('puerto', process.env.PORT || 3001);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.set('views', path.resolve(__dirname,"./views"));

app.listen (app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria  ${app.get('puerto')}` ));
app.use(express.static(path.resolve(__dirname,'../public')));
app.use(methodOverride('_method'));


app.use(session({
    secret : 'topSecret',
    resave: true,
    saveUninitialized: true,
}))

//Aqui coloco el Middleware para activar lo referido a las cookies
app.use(cookieParser());

//Middleware de aplicación que se encarga de controlar si el usuario está logueado o no.
app.use(acceso);


/*app.use('/', indexRouter);*/
//Aquí llamo a mi middleware para saber la cantidad de elementos que tiene el carrito
app.use(carritoCantidadMiddleware);

const webRoutes = require( path.resolve(__dirname,"routes",'webRoutes'));
app.use('/',webRoutes);

/*Descomente la siguiente linea, asi que ya estaria funcionando la conexion*/
const productRoutes = require( path.resolve(__dirname,"routes",'productRoutes'));
app.use('/productos',productRoutes);

const userRoutes = require( path.resolve(__dirname,"routes",'userRoutes'));
app.use('/usuarios',userRoutes);

const adminRoutes = require( path.resolve(__dirname,"routes",'adminRoutes'));
app.use('/administrar',adminRoutes);


//Aquí llamo a la ruta de las api de users
// const apiUsersRouter = require('./routes/api/users')

//Aquí llamo a la ruta de las api de products
const apiProductsRouter = require("./routes/api/products")
 app.use('/api/products',apiProductsRouter);
//app.use('/api/users',apiUsersRouter);


