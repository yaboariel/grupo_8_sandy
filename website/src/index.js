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





app.set('puerto', process.env.PORT || 3000);
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

// Aquí requerimos nuestros middlewares de session y cookies
/*
Cuando un cliente realiza una solicitud HTTP, y esa solicitud no contiene una cookie de sesión, express-session creará una nueva sesión. Crear una nueva sesión hace algunas cosas:

    generar una identificación de sesión única
    almacenar esa identificación de sesión en una cookie de sesión (para que se puedan identificar las solicitudes posteriores realizadas por el cliente)
    crear un objeto de sesión vacío, como req.session
    dependiendo del valor de saveUninitialized, al final de la solicitud, el objeto de sesión se almacenará en el almacén de sesión (que generalmente es algún tipo de base de datos)

Si durante la vida útil de la solicitud el objeto de sesión no se modifica, al final de la solicitud y cuando saveUninitialized es falso, el objeto de sesión (aún vacío, porque no modificado) no se almacenará en la tienda de sesión.

El razonamiento detrás de esto es que esto evitará que muchos objetos de sesión vacíos se almacenen en el almacén de sesión. Como no hay nada útil para almacenar, la sesión se "olvida" al final de la solicitud.

¿Cuándo quieres habilitar esto? Cuando desee poder identificar visitantes recurrentes, por ejemplo. Podrá reconocer a ese visitante porque envía la cookie de sesión que contiene la identificación única.

Acerca de resave: es posible que esto deba habilitarse para los almacenes de sesiones que no admiten el comando "táctil". Lo que esto hace es decirle al almacén de sesiones que una sesión en particular aún está activa, lo cual es necesario porque algunos almacenes eliminarán las sesiones inactivas (no utilizadas) después de algún tiempo.

Si un controlador de la tienda de sesión no implementa el comando táctil, entonces debe habilitar resave de modo que incluso cuando una sesión no se modificó durante una solicitud, todavía se actualice en la tienda (marcándola como activa).

*/



