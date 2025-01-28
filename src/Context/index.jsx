/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';
import { useEffect } from 'react'
import { apiUrl, apiUrlCat } from '../api'



export const ShoppingCartContext = createContext()


export const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('sign-out')
  let parsedAccount, parsedSignOut

  if(!accountInLocalStorage){
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  }else {
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if(!signOutInLocalStorage){
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  }else{
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }
}

export const ShoppingCartProvider = ({children}) => {

    //My account 
    const [account, setAccount] = useState({})
    // Sign out 
    const [signOut, setSignOut] = useState(false)
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
    // Get Categories
    const [categories, setCategories] = useState(null)
    
    const [filteredItems, setFilteredItems] = useState(null)

    //Search by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    //Search by category
    const [searchByCategory, setSearchByCategory] = useState(null)

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

    useEffect(() =>{
          const fetchData = async () => {
            try {
              const response = await fetch(`${apiUrlCat}`)
              const data = await response.json()
              setCategories(data)
            } catch (error) {
              console.error(`Oh no, ocurrió un error: ${error}`);
            }
          }
          fetchData()
          console.log('Categories', categories)
    },[])
    const filteredItemsByTitle = (items, searchByTitle) => {
      return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
      return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
      if(searchType === 'BY_TITLE') return filteredItemsByTitle(items, searchByTitle)
      if(searchType === 'BY_CATEGORY') return filteredItemsByCategory(items, searchByCategory)
      if(searchType === 'BY_TITLE_AND_CATEGORY') return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      if(!searchType) return items
    }


    useEffect(() => {
      if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items, searchByTitle, searchByCategory))
      if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items, searchByTitle, searchByCategory))
      if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY',items, searchByTitle, searchByCategory))
      if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items, searchByTitle, searchByCategory))
    },[items, searchByTitle, searchByCategory])
    

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
            searchByCategory,
            setSearchByCategory,        
            account,
            setAccount, 
            signOut,
            setSignOut,
            categories,
            setCategories
          }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node
};

