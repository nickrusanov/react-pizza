import { useDispatch } from 'react-redux';

import { removeItem, addItem, decAmount } from '../../redux/slices/cartSlice';

import pizzasImg from '../../data/pizzasImg';

function CartPizza({ item }) {
	const { title, id, dough, size, amount, price } = item;

	const dispatch = useDispatch();

	const onRemoveItem = () => {
		if (window.confirm('Вы действительно хотите удалить товар?')) {
			dispatch(removeItem(item));
		}
	};

	return (
		<li className="cart__item">
			<div className="cart__item-box">
				<img className="cart__item-img" src={pizzasImg[1][id]} alt={title} />

				<div className="cart__item-info">
					<h3 className="cart__item-title">{title}</h3>

					<p className="cart__item-tags">
						{dough} тесто, {size} см.
					</p>
				</div>
			</div>

			<div className="cart__item-qty">
				<button
					className="cart__item-qty-btn"
					type="button"
					onClick={() => dispatch(decAmount(item))}
					disabled={amount < 2}
				></button>

				<p className="cart__item-qty-text">{amount}</p>

				<button
					className="cart__item-qty-btn cart__item-qty-btn--inc"
					type="button"
					onClick={() => dispatch(addItem(item))}
				></button>
			</div>

			<p className="cart__item-price">{amount * price} ₽</p>

			<button
				className="cart__item-remove"
				type="button"
				onClick={onRemoveItem}
			></button>
		</li>
	);
}

export default CartPizza;
