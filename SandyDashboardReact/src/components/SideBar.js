import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import image from '../assets/images/logo-4.png';

/*Importando cada uno de los componentes a ser Enlaces */
import ProductsInDb from './ProductsInDb';
import LastProduct from './LastProduct';
import SellingProduct from './SellingProduct';
import kpis from './kpis';
import Categories from './Categories';
import ContentWrapper from './ContentWrapper';
import Error404 from './Error404';


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Ergoworld"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>


                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/ProductsInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Listado de productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/LastProduct">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Ultimo Producto</span>
                </Link>
                </li>
                 {/*<!-- Nav Item - Charts -->*/}
                 <li className="nav-item">
                <Link className="nav-link" to="/Categories">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Destacados</span>
                </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/kpis">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>KPIs</span>
                    </Link>
                </li>
                

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
           {/*<!-- Ya configuramos los links ahora configuro las rutas que van
           a administrar esos links -->*/}
            <Switch>
                <Route path='/' exact component={ContentWrapper}></Route>
                <Route path='/ProductsInDb' component={ProductsInDb} ></Route>
                <Route path='/LastProduct' component={LastProduct}></Route>
                <Route path='/SellingProduct' component={SellingProduct}></Route>
                <Route path='/kpis' component={kpis}></Route>
                <Route path='/Categories' component={Categories}></Route>
                <Route component={Error404}/>
            </Switch>

        </React.Fragment>
    )
}
export default SideBar;