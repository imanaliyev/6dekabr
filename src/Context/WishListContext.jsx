import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
export const WishListContext = createContext();
function WishListProvider({children}) {
  
    const [wishlist, setWishlist] = useLocalStorage("wishlist",[])

    const addWishlist =(item)=>{
        setWishlist(item)

    }
    
  return (
    <WishListContext.Provider value={[wishlist,addWishlist]}>
        {children}
    </WishListContext.Provider>
  )
}

export default WishListProvider