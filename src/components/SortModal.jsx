import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setSort } from '../redux/slices/filterSlice';

function SortModal({ setIsOpen, list, activeSort }) {
	const dispatch = useDispatch();

	useEffect(() => {
		const close = (e) => {
			if (e.key === 'Escape') {
				setIsOpen(false);
			}
		};

		window.addEventListener('keydown', close);

		return () => window.removeEventListener('keydown', close);
	}, [setIsOpen]);

	const onInputChange = (e) => {
		dispatch(setSort(e.target.value));
		setIsOpen(false);
	};

	return (
		<>
			<div
				className="catalog__sort-back"
				onClick={() => setIsOpen(false)}
			></div>

			<div className="catalog__sort-list">
				{list.map((item, i) => (
					<label className="catalog__sort-label" key={i}>
						<input
							className="catalog__sort-input"
							type="radio"
							name="sort"
							value={item.type}
							checked={activeSort === item.type}
							onChange={onInputChange}
						/>
						<span className="catalog__sort-label-text">{item.title}</span>
					</label>
				))}
			</div>
		</>
	);
}

export default SortModal;
