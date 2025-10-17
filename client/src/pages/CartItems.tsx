import { useSelector } from "react-redux"
import { Navbar } from "../components/Navbar"
import type { RootState } from "../store";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";

export default function CartItems() {
    const items = useSelector((state:RootState)=> state.cart.items);
    console.log("📦 Cart items from store:", items);
    const totalAmount = useSelector((state:RootState)=> state.cart.totalAmount);

    if(items.length=== 0){
      return(
        <div>
            <Navbar/>
            <div className="emptyCart">
          <p>Your Cart is Empty, please add items...</p>
          <button className="remove-btn"><Link to='/'>Home</Link></button>
            </div>
        </div>
      )
     }

  return (
    <>
    <Navbar/>   
    <div  style={{'padding':'80px'}}>
        <ul>
            <div>
                {items.map((currItem)=>{
                    return <li key={currItem.id}>
                        <Cart item={currItem}/>
                    </li>
                })}
            </div>
        </ul>
    </div>

            <div className="cartAmount">
                <p>Total Amount: ₹{Math.floor(totalAmount *88)}.00</p>
                <button>Place Order</button>
            </div>
    </>
  )
}
