import React, { useContext } from "react";
import { BasketContext } from "../../Context/BasketContext";
import { Link } from "react-router-dom";

function Navbar() {
  const handleWishlist =()=>{
    document.querySelector(".aside-wishlist").classList.toggle("active")
    document.querySelector(".close").classList.toggle("active2")

}
const handleBasket =()=>{
  document.querySelector(".aside-basket").classList.toggle("active")
  document.querySelector(".close").classList.toggle("active2")
  document.querySelector(".total-price").classList.toggle("active2")

  

}
const {basket} = useContext(BasketContext)
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to={'/'}>  <img src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp" alt="" /></Link>
        </div>
        <ul className="links">
          <Link to={"/"}><li>HOME</li></Link>
          <li>SHOP</li>
          <li>BLOG</li>
          <li>PAGES</li>
          <li>CONTACT</li>
        </ul>

        <div className="icons">

        <i class="fa-solid fa-magnifying-glass"></i>
        <i onClick={handleBasket} class="fa-solid fa-basket-shopping"><sup>{basket.length}</sup></i>
        <i class="fa-solid fa-user"></i>
        <i onClick={handleWishlist} class="fa-solid fa-heart"></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
