import type { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export const Navbar = () => {
  const items = useSelector((state:RootState)=> state.cart.items);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">SimpleMart</Link>
      </div>
      <div>
        <ul className="navLinks">
          <li><Link to='/add'>Add</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Contacts</Link></li>
          <div>
          <li className="cartCount"><Link to="/cart">Cart ({items.length})</Link></li>
          </div>
        </ul>               
      </div>
    </nav>
  )
}


