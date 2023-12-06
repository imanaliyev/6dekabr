import React, { useEffect, useState } from 'react'

function Home() {
    const [products, setProducts] = useState([])
    const [basket, setBasket] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
   
        })
      
      
    
   
    }, [])

    const removeAsideBar =()=>[
        document.querySelector(".aside-wishlist").classList.toggle("active")
    ]
    const removeBasket =()=>[
        document.querySelector(".aside-basket").classList.toggle("active")
    ]
   
  return (
    
 
    <section>
        <div className="aside-wishlist">
        <i onClick={removeAsideBar} class="fa-regular fa-circle-xmark"></i>

        </div>
        <div className="aside-basket">
        <i onClick={removeBasket} class="fa-regular fa-circle-xmark"></i>

        </div>
        {products.map(x=><ul>
            <img src={x.image}  />
            <li> Catagory:  {x.category}</li>
            <li>Price: {x.price}$</li>
            <div className="buttons">
            <button><i class="fa-regular fa-eye"></i></button>
            <button ><i class="fa-solid fa-cart-shopping"></i></button>
            <button onClick={null}><i class="fa-regular fa-heart"></i></button>
            </div>
           
           
        </ul>)}



    </section>
    
  )
}

export default Home