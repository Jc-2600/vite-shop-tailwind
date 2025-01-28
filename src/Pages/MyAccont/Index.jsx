import { useContext, useState, useRef } from "react";
import { ShoppingCartContext } from "../../Context";


export function MyAccount() {

  const {setAccount} = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  //Account 
  const accountl = JSON.parse(localStorage.getItem('account'))
  const form = useRef(null)


  const editAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    //Update Account 
    const stringfiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringfiedAccount)
    setAccount(data)
  }

  const renderUserInfo = () =>{
    return(
      <div className='flex flex-col w-80'>
        <p>
          <span className='font-light text-sm'>Name: </span>
          <span>{accountl?.name}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{accountl?.email}</span>
        </p>
        <button
          className='border border-black rounded-lg mt-6 py-3'
          onClick={() => setView('edit-user-info')}>
          Edit
        </button>
      </div>
    )
  }
  const renderEditUserInfo = () => {
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
          <button
            className="bg-black text-white w-full rounded-lg py-3"
            onClick={() => {setView('user-info'), editAccount()}}
          >
            Edit Account
          </button>
      </form>
    )
  }   
  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()

  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-medium text-xl text-center mb-6 w-80">Account info</h1>
        {renderView()}
      </div>
  )
}