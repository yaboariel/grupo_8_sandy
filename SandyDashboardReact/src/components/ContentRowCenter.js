import React from 'react';
import LastProduct from './LastProduct';
import SellingProduct from './SellingProduct';
import ProductsInDb from './ProductsInDb';
import Categories from './Categories';
import SearchBy from './SearchBy'

function ContentRowCenter(){
    return (
        <div className="row">
            <LastProduct />
            <SearchBy />
            <SellingProduct />
            <ProductsInDb />
            <Categories />

        </div>
    )
}

export default ContentRowCenter;