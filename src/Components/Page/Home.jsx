import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../Context/BasketContext";

function Home() {
  const { addBasket, basket , increase , decrease } = useContext(BasketContext);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const removeAsideBar = () => [
    document.querySelector(".aside-wishlist").classList.toggle("active"),
  ];
  const removeBasket = () => [
    document.querySelector(".aside-basket").classList.toggle("active"),
  ];

  return (
    <section>
      <div className="aside-wishlist">
        <i onClick={removeAsideBar} class="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="aside-basket">
        {basket.map((x) => (
          <ul>
            <img src={x.image} />
            <li> Catagory: {x.category}</li>
            <li>Price: {x.price}$</li>
            <div>
            <li>Count: {x.count}</li>
            <button onClick={()=>increase(x)}>+</button>
            <button onClick={()=>decrease(x)}>-</button>
            </div>
          
            
          </ul>
        ))}

        <i onClick={removeBasket} class="fa-regular fa-circle-xmark"></i>
      </div>
      {products.map((x) => (
        <ul>
          <img src={x.image} />
          <li> Catagory: {x.category}</li>
          <li>Price: {x.price}$</li>
          <div className="buttons">
            <button>
              <i class="fa-regular fa-eye"></i>
            </button>
            <button onClick={() => addBasket(x)}>
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <button onClick={null}>
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
        </ul>
      ))}
    </section>
  );
}

export default Home;
