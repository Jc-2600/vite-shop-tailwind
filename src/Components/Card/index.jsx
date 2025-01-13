export const Card = () => {
    return(
        <article className = 'bg-gray-300/30 cursor-pointer w-56 h-60 rounded-lg shadow-md'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-full text-black text-xs m-2 p-1'>Electronics</span>
                <img  className = 'w-full h-full object-cover rounded-lg'src="https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headphones" />
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </button>
            </figure>
            <p className='flex justify-between px-2'>
                <span className='text-sm font-light'>Headphones</span>
                <span className='text-lg font-medium'>$300</span>
            </p>
        </article>
    )
}