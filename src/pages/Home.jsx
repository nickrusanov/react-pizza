import { useContext, useEffect, useState, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import { SearchContext } from '../App';
import { setCategory, setPage, setFilters } from '../redux/slices/filterSlice';

import Categories from './../components/Categories';
import Sort from './../components/Sort';
import Pizza from './../components/Pizza/Pizza';
import PizzaSkelet from './../components/Pizza/PizzaSkelet';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';
import { fetchPizzas } from '../redux/slices/pizzasSlice';
import PizzaError from '../components/Pizza/PizzaError';

function Home() {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { category, sort, page, isFilterLoaded } = useSelector(
		(state) => state.filter
	);
	const { items, status } = useSelector((state) => state.pizzas);

	const isSearchLoad = useRef(false);
	const isMounted = useRef(false);
	const pages = useRef(1);

	const { searchValue } = useContext(SearchContext);

	const onCategoryClick = (title) => {
		dispatch(setCategory(title));
	};

	const pizzasQtyToShow = 8;

	const getPizzas = async () => {
		const filterCategory = `${
			category !== 'Все' ? `category=${category}&` : ''
		}`;

		const filterSortBy = `sortBy=${sort.replace('-', '')}&order=${
			sort.includes('-') ? 'asc&' : 'desc&'
		}`;

		const filterSearch = `${
			searchValue !== '' ? `search=${searchValue}&` : ''
		}`;

		dispatch(fetchPizzas({ filterCategory, filterSortBy, filterSearch }));
	};

	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.replace('?', ''));

			dispatch(setFilters({ ...params }));

			isSearchLoad.current = true;
		}
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);

		if (!isSearchLoad.current) {
			getPizzas();
		}

		isSearchLoad.current = false;
	}, [category, sort, searchValue, isFilterLoaded]);

	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify(
				{
					sort,
					category,
					page,
				},
				{ addQueryPrefix: true }
			);

			navigate(queryString);
		}

		isMounted.current = true;
	}, [category, sort, searchValue, page]);

	useEffect(
		() =>
			document.getElementById('root').scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			}),
		[page]
	);

	useMemo(() => {
		pages.current = Math.ceil(items.length / pizzasQtyToShow);
	}, [items.length]);

	useEffect(() => {
		dispatch(setPage(1));
	}, [items]);

	return (
		<main className="main">
			<section className="catalog">
				<div className="container">
					<div className="catalog__filters">
						<Sort />

						<Search />
					</div>

					<Categories
						activeCategory={category}
						onCategoryClick={onCategoryClick}
					/>

					<div className="catalog__content">
						{status === 'error' ? (
							<PizzaError />
						) : (
							<>
								<h1 className="catalog__title">{category} пиццы</h1>

								<ul className="catalog__list">
									{status === 'success' &&
										items.map((pizza, index) => {
											if (
												index < page * pizzasQtyToShow &&
												index >= (page - 1) * pizzasQtyToShow
											) {
												return <Pizza key={pizza.id} {...pizza} />;
											}
										})}

									{status === 'loading' &&
										[...new Array(4)].map((el, i) => <PizzaSkelet key={i} />)}
								</ul>
							</>
						)}

						{pages.current > 1 && (
							<Pagination
								page={page}
								pages={pages.current}
								setPage={(num) => dispatch(setPage(num))}
							/>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;
