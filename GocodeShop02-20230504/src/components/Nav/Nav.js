import './Nav.css'
import { DropDowns } from '../DropDowns/DropDown';
import { sortArrOptions, filterArrOptions } from '../../local-data/data';
import { useState,useEffect } from 'react';

export const Nav = (productsA) => {
  const [products,setProducts] = useState(productsA);
  useEffect(() => {
    console.log('useEffect of Nav.js');
    console.log('productsA came -' , productsA['productsA']);
    console.log('products came -' ,products);
    console.log('*******');
  },[]) 


  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <DropDowns 
          caption={'Filter'} 
          optionsArray={filterArrOptions}
          onChange={(event) => {
            console.log(event.target.value);
            const categories = productsA['productsA'].map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
            console.log('categories:',categories);
          }}  
        />
        <DropDowns 
          caption={'Sort'} 
          optionsArray={sortArrOptions}
          onChange={(event) => {console.log(event.target.value)}}  
        />
      </div>
    </nav>
  );
};
