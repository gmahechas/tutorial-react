import CartCounter from '@/components/shopping-cart/components/cart-counter';

export const metadata = {
	title: 'Shopping cart',
}

export default function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Products</span>
			<CartCounter />
    </div>
  );
}
