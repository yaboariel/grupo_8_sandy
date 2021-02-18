const express=require('express');
const app = express();
const path = require('path');

app.set('puerto', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,"./views"));

app.listen (app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria  ${app.get('puerto')}` ));
app.use(express.static(path.resolve(__dirname,'../public')));


const webRoutes = require( path.resolve(__dirname,"routes",'webRoutes'));
app.use('/',webRoutes);
/*
const productRoutes = require( path.resolve(__dirname,"routes",'productRoutes'));
app.use('/productos',productRoutes);
*/
const userRoutes = require( path.resolve(__dirname,"routes",'userRoutes'));
app.use('/usuario',userRoutes);