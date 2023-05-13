function Categories({ activeCategory, onCategoryClick }) {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианские',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	return (
		<ul className="catalog__categories">
			{categories.map((category) => {
				return (
					<li className="catalog__category" key={category}>
						<button
							className={`catalog__category-btn
							${activeCategory === category ? ' catalog__category-btn--active' : ''}`}
							onClick={() => onCategoryClick(category)}
						>
							{category}
						</button>
					</li>
				);
			})}
		</ul>
	);
}

export default Categories;
