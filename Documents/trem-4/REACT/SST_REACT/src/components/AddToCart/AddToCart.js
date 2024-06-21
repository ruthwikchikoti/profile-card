import { useContext } from "react";
import CartContext from "../../context/CartContext";
function AddToCart({ product }) {


  const { cart, incrementCart, DecrementCart } = useContext(CartContext);
  function increment() {
    incrementCart(product);
  }
  function Decrement() {
    DecrementCart(product);
  }


  const quantity = cart[product.id] ? cart[product.id].quantity : 0;
  if (quantity === 0) {
    return (
      <div>
        <button onClick={increment}>Add to cart</button>
      </div>
    )
  }
  return (
    <div>
      <button onClick={Decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={ increment}>+</button>
    </div>
  )

}
export default AddToCart;

// cart  -->
// 1. AddToCart button
// 2. RemoveFromCart button
// 3. Increment button
// 4. Decrement button
// 5. Total amount
// 6. Total quantity
// 7. Clear cart button 
