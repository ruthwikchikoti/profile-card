import './App.css';
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
import CartContext from './context/CartContext';
import { useState } from 'react';
function App() {
  let [cart,setCart] = useState(0);

  console.log(a, b);
  

function incrementCart(product){
  const newCart = {...cart};
  if(!newCart[product.id]){
    newCart[product.id] = {
     ...product,
      quantity : 0
    };
  }
  newCart[product.id].quantity += 1;
  setCart(newCart);

  console.log("incrementcart");
  }

function DecrementCart(product){
  const newCart = {...cart};
  if(!newCart[product.id]) return;
  newCart[product.id].quantity -=1;
  if(newCart[product.id].quantity <= 0){    
    delete newCart[product.id];
  };
  setCart(newCart);

  console.log("DecrementCart");
}




return (
    <CartContext.Provider value={{cart, incrementCart, DecrementCart}}>
  <div className="App">
    <Products cart={cart} incrementCart={incrementCart} DecrementCart={DecrementCart}  />
  </div>
</CartContext.Provider>
);
}
export default App;
