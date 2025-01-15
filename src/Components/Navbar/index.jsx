import  {NavLink} from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'

export const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'

    const {count} = useContext(ShoppingCartContext)

    return(
        <nav className='flex item-center justify-between fixed top-0 to-zinc-100 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex flex-row gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to = "/" >
                            shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/clothes"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/electronics"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/furnitures"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/toys"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/others"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Others
                    </NavLink>
                </li>
                
            </ul>
            <ul className='flex flex-row gap-3'>
                <li className='text-black/60'>
                    juan@correo.com
                </li>
                <li>
                    <NavLink
                        to = "/my-orders"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/my-account"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/sign-in"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Sing in
                    </NavLink>
                </li>
                <li>
                    🛒 <span>{count}</span>
                </li>            
            </ul>
        </nav>
    )
}