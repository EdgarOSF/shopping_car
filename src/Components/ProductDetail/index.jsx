import { useContext } from 'react';
import { ShoppingCarContext } from '../../Context';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/solid';

const ProductDetail = () => {
  const context = useContext(ShoppingCarContext);
  const { image, title, price, description } = { ...context.productToShow }

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon className="size-6 text-black-500 cursor-pointer" onClick={() => context.closeProductDetail()}></XMarkIcon>
        </div>
      </div>
      <figure className='px-6'>
        <img className='w-full h-full rounded-lg' src={image} alt={title} />
      </figure>
      <p className='flex flex-col px-6'>
        <span className='font-medium text-2xl mb-3'>${price}</span>
        <span className='font-medium text-md'>{title}</span>
        <span className='font-light text-sm'>{description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
