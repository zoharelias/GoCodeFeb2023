import { useContext } from 'react';
import './ShoppingCart.css'
import { MyContext } from '../../MyContext';
import { Product } from '../Product/Product';

export const ShoppingCart = () => {
    const {shoppingCart} = useContext(MyContext);
    const myContext = useContext(MyContext);
    //console.log('amount:',shoppingCart.amount);
    console.log('shoppingCart (in ShoppingCart Component):',shoppingCart);
    console.log('shoppingCart.amount:',shoppingCart.amount);
    console.log('myContext',myContext);

    const getNumberOfProductsInCart=()=>{
        let i = 0;
        shoppingCart.forEach(element => {
            i += element.amount;
        });
        return i;
    }

    const getTotalPrice=()=>{
        let i = 0;
        shoppingCart.forEach(element => {
            i += element.price * element.amount;
        });
        return i;
    }

    return (
      <div className="product-card">
        {/* <div className="product-image"> */}
          {/* <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" /> */}
          {/* <img src={src} title='product'/> */}
        {/* </div> */}
        <div className="product-info">
          {/* {<h4>{shoppingCart}</h4>} */}
          <h2>ShoppingCart</h2>
          <p>You have {getNumberOfProductsInCart()} products in your cart, total price: {getTotalPrice()}</p>
            {shoppingCart.map((product)=><p>amount: {product.amount}, {product.title} price={product.price}, total price: {product.price * product.amount}</p>)}

        </div>
      </div>
    );
  };
  