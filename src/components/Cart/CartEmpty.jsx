import { Link } from 'react-router-dom';

import sadImg from '../../assets/img/page/sad.png';
import emptyImg from '../../assets/img/page/empty.png';

function CartEmpty() {
	return (
		<>
			<h1 className="cart__title cart__title--empty">
				<span className="cart__title-text">Корзина пустая</span>
				<img className="cart__title-img" src={sadImg} alt="Грустный смайл" />
			</h1>

			<p className="cart__text">
				Вероятней всего, вы ещё не выбрали пиццу.
				<br />
				Для того, чтобы выбрать пиццу, перейдите на главную страницу.
			</p>

			<img className="cart__img" src={emptyImg} alt="Пустая корзина" />

			<Link className="cart__link" to="/">
				Вернуться назад
			</Link>
		</>
	);
}

export default CartEmpty;
