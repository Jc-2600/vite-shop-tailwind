/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
export const OrdersCard = props => {

    const {date, totalProducts, totalPrice} = props

    return (
        <div className="flex flex-row justify-between items-center mb-3 border border-gray-400 p-3 gap-5">
            <p>
                <span>Fecha: {date}</span>
                <span>Productos: {totalProducts}</span>
                <span>Precio Total: ${totalPrice}</span>
            </p>
        </div>
    )
}