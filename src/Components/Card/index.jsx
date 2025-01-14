import PropTypes from "prop-types"
import { useState } from "react"

export const Card = ({data}) => {
    const [imageError, setImageError] = useState(false)
    const handleImageError = () => {
        setImageError(true)
    }
  
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
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </button>
            </figure>
            <p className='flex justify-between px-2'>
                <span className='text-sm font-light'>{data.title}</span>
                <span className='text-lg font-medium'>$ {data.price}</span>
            </p>
        </article>
    )
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
};