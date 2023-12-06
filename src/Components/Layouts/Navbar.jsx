import React from "react";

function Navbar() {
  const handleWishlist =()=>{
    document.querySelector(".aside-wishlist").classList.toggle("active")

}
const handleBasket =()=>{
  document.querySelector(".aside-basket").classList.toggle("active")

}
  return (
    <header>
      <nav>
        <div className="logo">
            <img src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp" alt="" />
        </div>
        <ul className="links">
          <li>HOME</li>
          <li>SHOP</li>
          <li>BLOG</li>
          <li>PAGES</li>
          <li>CONTACT</li>
        </ul>

        <div className="icons">

        <i class="fa-solid fa-magnifying-glass"></i>
        <i onClick={handleBasket} class="fa-solid fa-basket-shopping"></i>
        <i class="fa-solid fa-user"></i>
        <i onClick={handleWishlist} class="fa-solid fa-heart"></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
