/* eslint-disable react/no-unknown-property */
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OrderCard } from '../OrderCard';
import './styles.css';
import { totalPrice, dateTime } from '../../utils';

export const CheckoutSideMenu = () => {
        
    const {isCheckoutSideMenuOpen, closeCheckoutSideMenu,cartProducts, setCartProducts, setOrder, order,setSearchByTitle} = useContext(ShoppingCartContext)

    const handleDelete = (id) =>{
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
    }

    const handleCheckout = () =>{
        const orderToCart = {
            date: dateTime(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }
        setOrder([...order, orderToCart])
        closeCheckoutSideMenu()
        setCartProducts([])
        setSearchByTitle(null)
    }


    
    return (
        <aside 
            className ={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} chekout-side-menu  flex-col fixed bg-white right-0 border border-black rounded-l `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button onClick={() => closeCheckoutSideMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                    </svg>
                </button>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    cartProducts.map( product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 border-t-2 border-gray-100 mb-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-xl'>${totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button 
                        className='w-full mt-4 text-sm font-medium text-white bg-black hover:bg-gray-700 px-2 py-2 rounded-sm' 
                        onClick={()=> handleCheckout()}>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}