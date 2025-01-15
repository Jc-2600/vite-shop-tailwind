/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';



export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Implement your context logic here.
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    //Close and open the shopping cart
    const toggleProductDetail = () =>  setIsProductDetailOpen(!isProductDetailOpen)
    //product detail - show product detail
    const [productToShow, setProductToShow] = useState({})



    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            toggleProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node
};

