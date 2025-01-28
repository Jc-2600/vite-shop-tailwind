import {useRoutes,Navigate} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { MyAccount } from '../Pages/MyAccont/Index'
import { MyOrder } from '../Pages/MyOrder'
import { MyOrders } from '../Pages/MyOrders'
import { NotFound } from '../Pages/NotFound'
import { SignIn } from '../Pages/SignIn'
import { useContext } from 'react'
import {ShoppingCartContext} from '../Context'


export const AppRoutes = () => {

  const {signOut, account} = useContext(ShoppingCartContext)
  
        //Account 
      const accountl = JSON.parse(localStorage.getItem('account'))
      
      //Has an account 
      const noAccountInLocalStorage = accountl ? Object.keys(accountl).length === 0 : true
      const noAccountInLocalState = account ? Object.keys(account).length === 0 : true
      const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalState
      
      //Sign out
      const signOutL = localStorage.getItem('sign-out')
      const parsedSignOut = JSON.parse(signOutL)
      const isUserSignOut = signOut || parsedSignOut
  
  

    let routes = useRoutes([
      { path: '/', element: hasUserAccount && !isUserSignOut ? <Home /> : <Navigate to={'/sign-in'}/>},
      { path: '/tools', element: hasUserAccount && !isUserSignOut ? <Home /> : <Navigate to={'/sign-in'}/>},
      { path: '/electronics', element: hasUserAccount && !isUserSignOut ? <Home /> : <Navigate to={'/sign-in'}/>},
      { path: '/furniture', element: hasUserAccount && !isUserSignOut ? <Home /> : <Navigate to={'/sign-in'}/>},
      { path: '/shoes', element: hasUserAccount && !isUserSignOut ? <Home /> : <Navigate to={'/sign-in'}/>},
      { path: '/miscellaneous', element: hasUserAccount && !isUserSignOut ? <Home /> : <Navigate to={'/sign-in'}/>},
      { path: '/my-account', element: <MyAccount /> }, 
      { path: '/my-order', element: <MyOrder /> },
      { path: '/my-orders', element: <MyOrders />},
      { path: '/my-orders/last', element: <MyOrder />},
      { path: '/my-orders/:id', element: <MyOrder />},
      { path: '/sign-in', element: <SignIn />},
      { path: '*', element: <NotFound />}
    ])
  
    return routes
}