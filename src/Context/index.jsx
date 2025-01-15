import { createContext } from 'react'
import { useState } from 'react'


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Implement your context logic here.
    const [count, setCount] = useState(0)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

