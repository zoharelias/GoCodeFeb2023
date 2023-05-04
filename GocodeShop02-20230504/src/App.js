import './App.css';
import { Nav } from './components/Nav/Nav';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import { useState,useEffect } from 'react';


function App() {
  const [productsA,setProductsA] = useState([]);
  const fetchProductsA = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    //console.log(data);
    setProductsA(data)
  }

  useEffect(() => {
    console.log('welcome to the world new compony')
    fetchProductsA()
  },[]) 


  return (
    <div className="App">
     <Nav productsA={productsA} />
     <ProductsSection productsA={productsA}/>
    </div>
  );
}

export default App;
