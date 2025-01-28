/* eslint-disable react/no-unknown-property */
import  {NavLink} from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'
import { ShoppingCart } from '../ShoppingCart'

export const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'

    const { setSearchByCategory, setSignOut, signOut, account} = useContext(ShoppingCartContext)

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
                 <ShoppingCart/>      
            </ul>
        </nav>
    )
}