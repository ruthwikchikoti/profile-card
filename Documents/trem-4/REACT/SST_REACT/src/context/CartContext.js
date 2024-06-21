import { createContext } from "react";
const CartContext = createContext({
    cart : {},
    incrementCart : () => {},
    DecrementCart : () => {},

})
export default CartContext;