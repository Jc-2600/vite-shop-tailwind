/* eslint-disable react/prop-types */
import { CalendarDaysIcon } from "@heroicons/react/16/solid"
import { ShoppingBagIcon } from "@heroicons/react/16/solid"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
export const OrdersCard = props => {

    const {date, totalProducts, totalPrice} = props

    return (
        <div className="flex flex-row justify-between items-center mb-3 border border-gray-400 p-5 rounded-lg w-96">
            <p className="flex flex-row justify-between w-full">
                <div className="flex flex-col">
                    <span className="flex flex-row items-center gap-2"><CalendarDaysIcon className="size-5 text-slate-700"/> {date}</span>
                    <span className="flex flex-row items-center gap-2"><ShoppingBagIcon className="size-5 text-slate-700"/>{totalProducts}</span>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <span className='font-medium text-xl'>${totalPrice}</span>
                    <ChevronRightIcon className="size-8 text-slate-700"/>
                </div>
            </p>
        </div>
    )
}