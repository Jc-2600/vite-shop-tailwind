/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';



export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Implement your context logic here.
    const [count, setCount] = useState(0)
    //Close and open the shopping details
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () =>  setIsProductDetailOpen(true)
    const closeProductDetail = () =>  setIsProductDetailOpen(false)

    //Close and open the shopping cart
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(false)
    //product detail - show product detail
    const [productToShow, setProductToShow] = useState({})
    //Shopppi Cart - state cart products 
    const [cartProducts, setCartProducts] = useState([])
    



    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            closeCheckoutSideMenu,
            setIsCheckoutSideMenuOpen,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node
};

