import React from 'react'
// import imagenFondo from '../assets/images/crocsnegras.jpg';

function Error404(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <h1>Página No Encontrada</h1>
                    <h2><strong>Error 404</strong></h2>
                </div>
            </div>    
        </React.Fragment>
    )
}
export default Error404;