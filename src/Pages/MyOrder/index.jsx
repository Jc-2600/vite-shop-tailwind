import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import { OrderCard } from "../../Components/OrderCard";

export function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <h1>My Order Page</h1>
      <div className='flex flex-col w-2/4'>
        {order?.slice(-1)[0].products.map((product) => (
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
