import { useState } from 'react';
import { useSelector } from 'react-redux';

import SortModal from './SortModal';

function Sort() {
	const activeSort = useSelector((state) => state.filter.sort);

	const [isOpen, setIsOpen] = useState(false);

	const list = [
		{ title: 'популярности ↓', type: 'rating' },
		{ title: 'популярности ↑', type: '-rating' },
		{ title: 'алфавиту ↓', type: 'title' },
		{ title: 'алфавиту ↑', type: '-title' },
	];

	const titleId = list.findIndex((obj) => obj.type === activeSort);

	return (
		<div className="catalog__sort">
			<span
				className={`catalog__sort-text${
					isOpen ? ' catalog__sort-text--open' : ''
				}`}
			>
				Сортировка по:
			</span>

			<button
				className="catalog__sort-btn"
				type="button"
				onClick={() => setIsOpen(!isOpen)}
			>
				{list[titleId].title}
			</button>

			{isOpen && (
				<SortModal setIsOpen={setIsOpen} list={list} activeSort={activeSort} />
			)}
		</div>
	);
}

export default Sort;
