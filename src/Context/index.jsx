/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';



export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Implement your context logic here.
    const [count, setCount] = useState(0)

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const toggleProductDetail = () =>  setIsProductDetailOpen(!isProductDetailOpen)


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            toggleProductDetail,
            isProductDetailOpen,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node
};

