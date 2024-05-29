import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCarContext } from '../../Context';
import OrderCard from '../OrderCard';
import './styles.css';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCarContext);


  const handleDelete = (id) => {
    const filtered = context.cartProducts.filter((product) => product.id != id)
    context.setCartProducts(filtered)
  }

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
      <div className='px-6 overflow-y-scroll'>
        {context.cartProducts.map((product) => (
          <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.image} price={product.price} handleDelete={handleDelete} />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
