import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Layouts/Navbar";
import { useParams } from "react-router-dom";


function Details() {
  let { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
        setIsLoading(false);
      });
    console.log(detail);
  }, []);

  return (
    <>
      <Navbar />

      <section className="whole">
      {isLoading ? (
        <i class="fa-solid fa-spinner"></i>
      ) : (
        <div className="container">
          <img src={detail.image} alt="" />
          <div className="info">
            <p>
              <span>Catagory:</span>
              {detail.category}
            </p>
            <p>
              <span>Price:</span>
              {detail.price}$
            </p>
            <p>
              <span>Descrption:</span>
              {detail.description}
            </p>
          </div>
        </div>
      )}
      </section>
    </>
  );
}

export default Details;
