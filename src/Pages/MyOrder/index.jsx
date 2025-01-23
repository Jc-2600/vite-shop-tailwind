import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import { OrderCard } from "../../Components/OrderCard";

export function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let orderId = currentPath.split("/").slice(-1)[0];
  if(orderId === 'last') orderId = order?.length - 1

  return (
    <Layout>
      <h1>My Order Page</h1>
      <div className='flex flex-col w-2/4'>
        {order?.[orderId]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
          
        ))}
      </div>
    </Layout>
  );
}
