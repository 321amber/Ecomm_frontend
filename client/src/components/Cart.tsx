import { useDispatch } from "react-redux";
import type { CartItem } from "../types"
import { removeItemFromCart } from "../features/CartSlice";


function Cart({item}:CartItem) {
     const {images, title, price, availabilityStatus, quantity} = item;
     const dispatch = useDispatch();

     const handleRemoveItems = (e)=>{
        e.preventDefault();
          dispatch(removeItemFromCart(item.id));
          console.log("item removed");         
     }


  return (
    <div className="cart-item">
  <div className="cart-image">
    <img src={images} alt={title} />
  </div>

  <div className="cart-details">
    <h3 className="cart-title">{title}</h3>
    <p className="cart-price">price: ₹{Math.floor(price * 88)}.00</p>

    <div className="cart-actions">
      <label>
        Quantity:
        <input type="number" min="1" defaultValue={quantity} className="cart-quantity" />
      </label>
       {availabilityStatus}
      <button className="remove-btn"
        onClick={handleRemoveItems}
      >Remove</button>
    </div>
  </div>
</div>

  )
}

export default Cart
