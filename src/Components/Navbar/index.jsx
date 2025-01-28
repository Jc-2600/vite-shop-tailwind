/* eslint-disable react/no-unknown-property */
import  {NavLink} from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'

export const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'

    const {cartProducts, setSearchByCategory, setSignOut, signOut, account} = useContext(ShoppingCartContext)

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

    const handleSignOut = () =>{
        const stringfiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringfiedSignOut)
        setSignOut(true)
    }

    const renderView = () =>{
        if(hasUserAccount  && !isUserSignOut){
            return(
                <>
                <li className='text-black/60'>
                        {accountl?.name}
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
                            isActive ? activeStyle : undefined}
                        onClick = {() => handleSignOut()}
                    >
                            Sing out
                    </NavLink>
                </li>
                
                </>
            )
        }else{
            return(
                <li>
                    <NavLink
                        to = "/sign-in"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined}
                        onClick = {() => handleSignOut()}
                    >
                            Sing out
                    </NavLink>
                </li>
            )
            
        }
    }


    return(
        <nav className='flex item-center justify-between fixed top-0 to-zinc-100 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className='flex flex-row gap-3 items-center'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to ={`${isUserSignOut ? 'sign-in':'/'}`}
                        onClick={() => setSearchByCategory('')}>
                            shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/"
                        onClick={() => setSearchByCategory('')}
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/tools"
                        onClick={() => setSearchByCategory('tools')}
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Tools
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/electronics"
                        onClick={() => setSearchByCategory('electronics')}
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/furniture"
                        onClick={() => setSearchByCategory('furniture')}
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/shoes"
                        onClick={() => setSearchByCategory('shoes')}
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/miscellaneous"
                        onClick={() => setSearchByCategory('miscellaneous')}
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Miscellaneous
                    </NavLink>
                </li>
            </ul>
            <ul className='flex flex-row gap-3 items-center'>
                 {renderView()}   
                 <li className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span>{cartProducts.length}</span>
                </li>        
            </ul>
        </nav>
    )
}