import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ShoppingCarContext } from '../../Context';
import OrderCard from '../OrderCard';
import totalPrice from '../Utils';
import './styles.css';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCarContext);

  const handleDelete = (id) => {
    const filtered = context.cartProducts.filter((product) => product.id != id);
    context.setCartProducts(filtered);
  };

  const handleOrder = () => {
    const orderToAdd = {
      date: '21-07-87',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Checkout</h2>
        <div>
          <XMarkIcon
            className="size-6 text-black-500 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to="/my-orders/last">
          <button className="bg-black text-white w-full py-3 rounded-lg" onClick={() => handleOrder()}>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
