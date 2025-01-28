import { useContext, useState, useRef } from "react";
import { Link , Navigate} from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

export function SignIn() {


  const {account,setSignOut} = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  //Account 
  const accountl = JSON.parse(localStorage.getItem('account'))

  //Has an account 
  const noAccountInLocalStorage = accountl ? Object.keys(accountl).length === 0 : true
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true
  const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalState

  //sign in
  const handleSignIn = () =>{
    const stringfiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringfiedSignOut)
    setSignOut(false)
    //Redirect to home
    return <Navigate replace to={'/'} />
  }

  //Create an account
  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    //Create Account 
    const stringfiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringfiedAccount)
    //Sign in
    handleSignIn()
  }

  // Create rendering form view
  const renderLogin = () => {
    return(
      <div className="flex flex-col w-80 justify-center"> 
          <p>
            <span className="font-light text-sm">name: </span>
            <span>{accountl?.name}</span>
          </p>
          <p>
            <span className="font-light text-sm">Email: </span>
            <span>{accountl?.email}</span>
          </p>
          <Link 
            to='/'>
              <button 
                className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
                onClick={() => handleSignIn()}
                disabled={!hasUserAccount}
                >
                LogIn
              </button>
          </Link>
          <div className="text-center">
            <a className="font-light text-xs underline underline-offset-4" href="/">forgot my password</a>
          </div>
          <button 
            className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
            onClick={() => setView('create-user-info')}
            disabled = {hasUserAccount}
            >
            Sign up
          </button>
        </div>
    )
  }
  
  const renderCreateUserInfo = () =>{
    return(
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">Your name:</label>
          <input 
            type="text"
            id="name"
            name="name"
            defaultValue={accountl?.name}
            placeholder="Peter"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">Your email:</label>
          <input 
            type="email"
            id="email"
            name="email"
            defaultValue={accountl?.email}
            placeholder="peter@correo.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">Your password:</label>
          <input 
            type="password"
            id="password"
            name="password"
            defaultValue={accountl?.password}
            placeholder="*********"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <Link to="/">
          <button
            className="bg-black text-white w-full rounded-lg py-3"
            onClick={() => createAnAccount()}
          >
            Create An Account
          </button>
        </Link>
      </form>
    )
  }
  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin()

  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-medium text-xl text-center mb-6 w-80">Sign In Page</h1>
        {renderView()}
      </div>
  )
}