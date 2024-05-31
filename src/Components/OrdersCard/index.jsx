import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black w-80 rounded-lg p-4 shadow-md">
      <p className="flex flex-col">
        <span className='font-light'>01.02.87</span>
        <span className='font-light'>{totalProducts} articles</span>
      </p>
      <p className='flex items-center gap-1'>
        <span className="text-lg font-semibold">${totalPrice}</span>
        <ChevronRightIcon className="size-6 text-black-500 cursor-pointer"></ChevronRightIcon>
      </p>
    </div>
  );
};

export default OrdersCard;
