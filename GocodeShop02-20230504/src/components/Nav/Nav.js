import './Nav.css'
import { DropDowns } from '../DropDowns/DropDown';
import { sortArrOptions, filterArrOptions } from '../../local-data/data';
import { useState,useEffect } from 'react';

export const Nav = (productsA) => {
  const [products,setProducts] = useState(productsA);
  const [categories,setCategories] = useState([]);
  const filterByCategory = (selectedCategory) =>{ 
    
    console.log('function filterByCategory, Selectes category= ', selectedCategory);
    console.log('function filterByCategory, productsA= ', productsA);
    console.log('function filterByCategory, products= ', products);
    let myArr =[];
    myArr = productsA['productsA'].filter((prod)=>{
      return prod.category === selectedCategory;
    });
    console.log('myArr=',myArr);
    setProducts(myArr);
  }
  useEffect(() => {
    console.log('useEffect of Nav.js');
    // console.log('productsA came -' , productsA['productsA']);
    // console.log('products came -' ,products);
    // console.log('*******');
    setCategories(productsA['productsA'].map(p => p.category).filter((value, index, array) => array.indexOf(value)===index));
    console.log('categories:',categories);
},[]);

useEffect(() => {
  console.log('useEffect Products change');
  // console.log('productsA came -' , productsA['productsA']);
  // console.log('products came -' ,products);
  // console.log('*******');
  //setCategories(productsA['productsA'].map(p => p.category).filter((value, index, array) => array.indexOf(value)===index));
 // console.log('categories:',categories);
},[productsA]);








  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <DropDowns 
          caption={'Filter'} 
          optionsArray={categories}
          onChange={(event) => {
            console.log(event.target.value);
            filterByCategory(event.target.value);
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
