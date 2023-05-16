import './App.css';
import { MyContext } from './MyContext';
import { Nav } from './components/Nav/Nav';
import { ProductsSection } from './components/ProductsSection/ProductsSection';
import { useState,useEffect,useContext } from 'react';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';

function App() {
  const [productsA,setProductsA] = useState([]);

  const [shoppingCart,setShoppingCart] = useState([]);


  const fetchProductsA = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProductsA(data)
  }

  useEffect(() => {
    //console.log('useEffect of App.js');
    fetchProductsA();
    //console.log('App.js: after fetchProductsA() productsA = ',productsA);
  },[]) 


  return (
    <MyContext.Provider value={{shoppingCart,setShoppingCart}}>
      <div className="App">
        <p>You have {shoppingCart.amount} products in your cart</p>
      <Nav productsA={productsA} updateProducts={setProductsA} />
      <ShoppingCart />
      <ProductsSection productsA={productsA} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
