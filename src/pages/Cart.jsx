import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartEmpty from '../components/Cart/CartEmpty';
import CartPizza from '../components/Cart/CartPizza';

import { clearItems } from '../redux/slices/cartSlice';

function Cart() {
	const { items, priceTotal, itemsCount } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const onClearItems = () => {
		if (window.confirm('Вы действительно хотите удалить все товары?')) {
			dispatch(clearItems());
		}
	};

	return (
		<main className="main">
			<section className="cart">
				<div className="container container--w860">
					<div className="cart__inner">
						{itemsCount > 0 ? (
							<>
								<header className="cart__header">
									<h1 className="cart__title">
										<svg
											className="cart__title-icon"
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
												stroke="white"
												strokeWidth="1.8"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
												stroke="white"
												strokeWidth="1.8"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
												stroke="white"
												strokeWidth="1.8"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>

										<span className="cart__title-text">Корзина</span>
									</h1>

									<button
										className="cart__btn"
										type="button"
										onClick={onClearItems}
									>
										<svg
											className="cart__btn-icon"
											width="18"
											height="19"
											viewBox="0 0 18 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M1.5 4H3.16667H16.5"
												stroke="#B6B6B6"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M5.66663 4.00001V2.33334C5.66663 1.89131 5.84222 1.46739 6.15478 1.15483C6.46734 0.842266 6.89127 0.666672 7.33329 0.666672H10.6666C11.1087 0.666672 11.5326 0.842266 11.8451 1.15483C12.1577 1.46739 12.3333 1.89131 12.3333 2.33334V4.00001M14.8333 4.00001V15.6667C14.8333 16.1087 14.6577 16.5326 14.3451 16.8452C14.0326 17.1577 13.6087 17.3333 13.1666 17.3333H4.83329C4.39127 17.3333 3.96734 17.1577 3.65478 16.8452C3.34222 16.5326 3.16663 16.1087 3.16663 15.6667V4.00001H14.8333Z"
												stroke="#B6B6B6"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M7.33337 8.16667V13.1667"
												stroke="#B6B6B6"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M10.6666 8.16667V13.1667"
												stroke="#B6B6B6"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>

										<span className="cart__btn-text">Очистить корзину</span>
									</button>
								</header>

								<ul className="cart__list">
									{items.map((item) => (
										<CartPizza
											key={item.id + item.dough + item.size}
											item={item}
										/>
									))}
								</ul>

								<footer className="cart__footer">
									<div className="cart__footer-details">
										<p className="cart__footer-text">
											Всего пицц:{' '}
											<span className="cart__footer-qty">{itemsCount} шт.</span>
										</p>

										<p className="cart__footer-text">
											Сумма заказа:{' '}
											<span className="cart__footer-price">{priceTotal} ₽</span>
										</p>
									</div>

									<div className="cart__footer-btns">
										<Link className="cart__footer-back" to="/">
											<svg
												className="cart__footer-back-icon"
												width="12"
												height="20"
												viewBox="0 0 12 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M9.125 19.1L0.700003 10.7C0.600003 10.6 0.529003 10.4917 0.487003 10.375C0.445003 10.2583 0.424337 10.1333 0.425003 9.99999C0.425003 9.86666 0.44567 9.74166 0.487003 9.62499C0.528337 9.50833 0.599336 9.39999 0.700003 9.29999L9.125 0.874994C9.35834 0.64166 9.65 0.524994 10 0.524994C10.35 0.524994 10.65 0.649994 10.9 0.899994C11.15 1.14999 11.275 1.44166 11.275 1.77499C11.275 2.10833 11.15 2.39999 10.9 2.64999L3.55 9.99999L10.9 17.35C11.1333 17.5833 11.25 17.871 11.25 18.213C11.25 18.555 11.125 18.8507 10.875 19.1C10.625 19.35 10.3333 19.475 10 19.475C9.66667 19.475 9.375 19.35 9.125 19.1Z"
													fill="black"
												/>
												<clipPath id="clip0_97333_33">
													<rect width="12" height="20" fill="white" />
												</clipPath>
											</svg>

											<span className="cart__footer-back-text">
												Вернуться назад
											</span>
										</Link>

										<button className="cart__footer-buy" type="button">
											Оплатить сейчас
										</button>
									</div>
								</footer>
							</>
						) : (
							<CartEmpty />
						)}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Cart;
