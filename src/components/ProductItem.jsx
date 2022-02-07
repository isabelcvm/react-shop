import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addcart from '@icons/bt_add_to_cart.svg'
import { useState } from 'react/cjs/react.development';


const ProductItem = ({product}) => {

	const {addToCart} = useContext(AppContext);

	const handleClick = item => { //item = producto 
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p> $ {product.price} </p>
					<p> {product.title} </p>
				</div>
				 <figure onClick={() => handleClick(product)}>   
						{/* el onClick lo volvimos una funcion en el llamado */}
					<img src={addcart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
