import PropTypes from "prop-types"
import { useState } from "react"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"


export const Card = ({data}) => {
    const [imageError, setImageError] = useState(false)
    const handleImageError = () => {
        setImageError(true)
    }

    const {count, setCount} = useContext(ShoppingCartContext)
    
  
    return(
        <article className = 'bg-gray-300/30 cursor-pointer w-56 h-max rounded-lg shadow-md'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-full text-black text-xs m-2 p-1'>{data.category.name}</span>
                <img  className = 'w-full h-full object-cover rounded-lg'
                    src={
                        !imageError 
                            ? data.images[0]
                            : "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png?ssl=1"
                    } 
                    alt={data.title} 
                    onError={handleImageError}
                />
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" 
                    onClick={() => setCount(count + 1)}>
                    +
                </button>
            </figure>
            <div className='flex justify-between px-2 flex-row space-x-2'>
                <span className='text-sm font-light  w-3/4'>{data.title}</span>
                <span className='text-lg font-medium w-1/4'>$ {data.price}</span>
            </div>
        </article>
    )
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
};