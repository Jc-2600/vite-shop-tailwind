import  {NavLink} from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'

export const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'

    const {count} = useContext(ShoppingCartContext)

    return(
        <nav className='flex item-center justify-between fixed top-0 to-zinc-100 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex flex-row gap-3 items-center'>
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
            <ul className='flex flex-row gap-3 items-center'>
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
                <li className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span>{count}</span>
                </li>            
            </ul>
        </nav>
    )
}