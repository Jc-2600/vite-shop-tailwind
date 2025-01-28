import { BrowserRouter} from 'react-router-dom'
import {initializeLocalStorage, ShoppingCartProvider} from '../../Context'
import { Navbar } from '../../Components/Navbar'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import { AppRoutes } from '../../Routes'
import './App.css'



function App() {

  initializeLocalStorage()
  
  return ( 
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
