import CartItem from '../CartItem/cartItem'
import { Wrapper } from './cart.styles'
import { CartItemType } from '../App'

type Props = {
	cartItems: CartItemType[]
	addToCart: (clickedItem: CartItemType) => void
	removeFromCart: (id: number) => void
}

export const Cart: React.FC<Props> = ({
	cartItems,
	addToCart,
	removeFromCart,
}) => {
	const calculateTotalItems = (items: CartItemType[]) =>
		items.reduce((ack: number, item) => ack + item.amount * item.price, 0)
	return (
		<Wrapper>
			<h2>Your Shopping Cart</h2>
			{cartItems.length === 0 ? <p>No item in cart</p> : null}
			{cartItems.map((item) => (
				<CartItem
					key={item.id}
					item={item}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			))}
			<h2>Total: ${calculateTotalItems(cartItems).toFixed(2)}</h2>
		</Wrapper>
	)
}
