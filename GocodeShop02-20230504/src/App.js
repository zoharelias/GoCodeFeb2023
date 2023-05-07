import './App.css';
import { Nav } from './components/Nav/Nav';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import { useState,useEffect } from 'react';


function App() {
  const [productsA,setProductsA] = useState([]);
  const fetchProductsA = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProductsA(data)
  }

  useEffect(() => {
    console.log('useEffect of App.js');
    fetchProductsA();
    console.log('App.js: after fetchProductsA() productsA = ',productsA);
  },[]) 


  return (
    <div className="App">
     <Nav productsA={productsA} />
     <ProductsSection productsA={productsA}/>
    </div>
  );
}

export default App;
