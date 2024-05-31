import { useContext } from 'react';
import Layout from '../../Components/Layout';
import OrdersCard from '../../Components/OrdersCard';
import { ShoppingCarContext } from '../../Context';
import { Link } from 'react-router-dom';


function MyOrders() {
  const context = useContext(ShoppingCarContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <h1 className='text-2xl'>My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
