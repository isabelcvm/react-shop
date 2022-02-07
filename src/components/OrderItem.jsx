import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png'

const OrderItem = ({ product }) => {
	const {removeFromCart } = useContext(AppContext);

	const handelRemove = product => {
		removeFromCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>$ {product.price}</p>
			<img src={close} alt="close" onClick={() => handelRemove(product)} />
		</div>
	);
}

export default OrderItem;
