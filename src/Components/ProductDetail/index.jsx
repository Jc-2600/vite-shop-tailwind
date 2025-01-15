/* eslint-disable react/no-unknown-property */
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import './styles.css';

export const ProductDetail = () => {
        
    const {isProductDetailOpen, toggleProductDetail} = useContext(ShoppingCartContext)
    
    return (
        <aside 
            className ={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed bg-white right-0 border border-black rounded-l`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Details</h2>
                <button onClick={() => toggleProductDetail()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                    </svg>
                </button>
            </div>
        </aside>
    )
}