import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Crocs',
        Length: 'Negras',
        Rating: 'Adulto',
        Categories: ['Disponible'],
        Awards: 2300
    },
    {
        Title: 'Crocs Modelo 2.0',
        Length: 'Celestes',
        Rating: 'Niño',
        Categories: ['Disponible'],
        Awards: 3000
    },
    
]


function Categories (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
            <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Destacados</h5>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Modelo</th>
                                <th>Color</th>
                                <th>Talle</th>
                                <th>Stock</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Modelo</th>
                                <th>Color</th>
                                <th>Talle</th>
                                <th>Stock</th>
                                <th>Precio</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Categories;