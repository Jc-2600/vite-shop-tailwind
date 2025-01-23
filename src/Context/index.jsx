/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';
import { useEffect } from 'react'
import { apiUrl } from '../api'



export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
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
    

    // Shopping cart - order
    const [order, setOrder] = useState([])
    // Get products
    const [items, setItems] = useState(null)
    
    const [filteredItems, setFilteredItems] = useState(null)

    //Search by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    useEffect(() =>{
          const fetchData = async () => {
            try {
              const response = await fetch(`${apiUrl}`)
              const data = await response.json()
              setItems(data)
            } catch (error) {
              console.error(`Oh no, ocurrió un error: ${error}`);
            }
          }
          fetchData()
        },[])

    const filteredItemsByTitle = (items, searchByTitle) => {
      return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
      if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    },[items, searchByTitle])


    return (
        <ShoppingCartContext.Provider value={{
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
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle, 
            filteredItems,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node
};

