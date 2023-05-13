import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';

import pizzasImg from '../../data/pizzasImg';

function Pizza({ title, id, sizes, types, prices }) {
	const items = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const [qty, setQty] = useState(0);

	const qtyCalc = () =>
		items.reduce(
			(sum, item) => (item.id === id ? sum + Number(item.amount) : sum),
			0
		);

	useEffect(() => {
		setQty(qtyCalc());
	}, [items]);

	const sizesDefault = [26, 30, 40];
	const typesDefault = ['традиционное', 'тонкое'];

	const [selectedDiameter, setSelectedDiameter] = useState(sizes[0]);
	const [selectedDough, setSelectedDough] = useState(types[0]);

	useEffect(() => {
		if (selectedDiameter === 26) {
			setSelectedDough(types[0]);
		}
	}, [selectedDiameter, types]);

	const price = () => {
		let price;

		sizes.forEach((size, i) => {
			if (size === selectedDiameter) {
				price = prices[i];
			}
		});

		return price;
	};

	const onFormSubmit = (e) => {
		e.preventDefault();

		const item = {
			id,
			title,
			size: selectedDiameter,
			dough: typesDefault[selectedDough],
			price: price(),
			amount: 1,
		};

		dispatch(addItem(item));
	};

	return (
		<li className="catalog__item">
			{qty > 0 && (
				<p className="catalog__item-qty">
					В корзине: <span>{qty}</span>
				</p>
			)}

			<img className="catalog__item-img" src={pizzasImg[0][id]} alt={title} />

			<h2 className="catalog__item-title">{title}</h2>

			<form className="catalog__item-form" onSubmit={onFormSubmit}>
				<div className="catalog__item-select">
					<div className="catalog__item-box">
						{sizesDefault.map((size) => (
							<label className="catalog__item-label" key={size}>
								<input
									className="catalog__item-radio"
									type="radio"
									name="diameter"
									value={size}
									disabled={!sizes.includes(size)}
									checked={selectedDiameter === size}
									onChange={(e) => setSelectedDiameter(Number(e.target.value))}
								/>
								<div className="catalog__item-label-text">{size} см.</div>
							</label>
						))}
					</div>

					<div className="catalog__item-box">
						<label className="catalog__item-label">
							<input
								className="catalog__item-radio"
								type="radio"
								name="dough"
								value={0}
								disabled={!types.includes(0)}
								checked={selectedDough === 0}
								onChange={(e) => setSelectedDough(Number(e.target.value))}
							/>
							<div className="catalog__item-label-text">{typesDefault[0]}</div>
						</label>

						<label className="catalog__item-label">
							<input
								className="catalog__item-radio"
								type="radio"
								name="dough"
								value={1}
								disabled={!types.includes(1) || selectedDiameter === 26}
								checked={selectedDough === 1 && selectedDiameter !== 26}
								onChange={(e) => setSelectedDough(Number(e.target.value))}
							/>
							<div className="catalog__item-label-text">{typesDefault[1]}</div>
						</label>
					</div>
				</div>

				<div className="catalog__item-footer">
					<p className="catalog__item-price">{price()} ₽</p>

					<button className="catalog__item-btn" type="submit">
						Добавить
					</button>
				</div>
			</form>
		</li>
	);
}

export default Pizza;
