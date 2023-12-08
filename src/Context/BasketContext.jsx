import React, { createContext, useState } from 'react'
import useLocalStorage from "../hooks/useLocalStorage";
import 'react-toastify/dist/ReactToastify.css';

export const BasketContext = createContext();
function BasketProvider({children}) {
    const [basket, setBasket] = useLocalStorage("basket",[])
    const [totalPrice, setTotalPrice] = useState(0);


    function addBasket(item) {
        const index = basket.findIndex((x) => x.id === item.id);
        setTotalPrice(totalPrice + item.price);
        if (index === -1) {
            setBasket([...basket,{...item,count:1}]);

            
        }

      
        
    }
    
   
    const increase=(item)=>{
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
    const removeItem=(item)=>{
        setBasket(basket.filter(x=> x.id !== item.id))
        setTotalPrice(totalPrice - item.price);

    }

    const data ={
        addBasket,basket,increase,decrease,removeItem,totalPrice

    }
   
  return (
   
    <BasketContext.Provider value={data}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider