import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../Context/BasketContext";
import Navbar from "../Layouts/Navbar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const notify = () => {
    toast.success("Item added to basket", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [isLoading, setIsLoading] = useState(false);
  const { addBasket, basket, increase, decrease, removeItem, totalPrice } =
    useContext(BasketContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  const removeAsideBar = () => [
    document.querySelector(".aside-wishlist").classList.remove("active"),
    document.querySelector(".close").classList.remove("active2"),
  ];
  const removeBasket = () => [
    document.querySelector(".aside-basket").classList.remove("active"),
    document.querySelector(".close").classList.remove("active2"),
    document.querySelector(".aside-wishlist").classList.remove("active"),
    document.querySelector(".total-price").classList.remove("active2"),
  ];

  return (
    <>
      <Navbar />
      <section>
        <div onClick={removeBasket} className="close"></div>
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
                <button onClick={() => increase(x)}>+</button>
                <button onClick={() => decrease(x)}>-</button>
                <button className="remove" onClick={() => removeItem(x)}>
                  remove
                </button>
              </div>
            </ul>
          ))}

          <i onClick={removeBasket} class="fa-regular fa-circle-xmark"></i>
        </div>
        <div className="total-price">{totalPrice} $</div>
        {isLoading ? (
          <i class="fa-solid fa-spinner"></i>
        ) : (
          products.map((x) => (
            <ul>
              <img src={x.image} />
              <li> Catagory: {x.category}</li>
              <li>Price: {x.price}$</li>
              <div className="buttons">
                <button>
                  <Link to={"/detail/" + x.id}>
                    <i class="fa-regular fa-eye"></i>
                  </Link>
                </button>
                <button
                  onClick={() => {
                    notify();
                    addBasket(x);
                  }}
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
                <button onClick={null}>
                  <i class="fa-regular fa-heart"></i>
                </button>
              </div>
            </ul>
          ))
        )}
        <ToastContainer />
      </section>
    </>
  );
}

export default Home;
