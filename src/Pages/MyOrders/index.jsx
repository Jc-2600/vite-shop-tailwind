import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from 'react-router-dom';

export function MyOrders() {

    const {order} = useContext(ShoppingCartContext)
    return (
      <Layout>
        <h1>My Orders Page</h1>
        {
          order.map((order, index)=>(
            <Link key={index}to={`/my-orders/${index}`}>
              <OrdersCard 
                date={order.date}
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts}/>
            </Link>
          ))
        }
      </Layout>
    )
}