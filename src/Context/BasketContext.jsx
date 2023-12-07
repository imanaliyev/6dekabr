import React, { createContext, useState } from 'react'
import useLocalStorage from "../hooks/useLocalStorage";
import 'react-toastify/dist/ReactToastify.css';

export const BasketContext = createContext();
function BasketProvider({children}) {
    const [basket, setBasket] = useLocalStorage("basket",[])


    function addBasket(item) {
        const index = basket.findIndex((x) => x.id === item.id);
        if (index === -1) {
            setBasket([...basket,{...item,count:1}]);

            
        }else{
          
            alert("Item has already added to basket!")
           
     
            
        }

      
        
    }
    const increase=(item)=>{
        const price = item.price
        
        item.price = item.price + price
        console.log(price);
        const index = basket.findIndex((x) => x.id === item.id);
        basket[index].count++
        setBasket([...basket])
    }
    const decrease=(item)=>{
        
        const index = basket.findIndex((x) => x.id === item.id);
        if (basket[index].count === 1) {
            return
        }
        basket[index].count--
        setBasket([...basket])

    }

    const data ={
        addBasket,basket,increase,decrease

    }
   
  return (
   
    <BasketContext.Provider value={data}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider