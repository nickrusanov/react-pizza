import debounce from 'lodash.debounce';
import { useContext, useRef, useState, useCallback, useEffect } from 'react';

import { SearchContext } from '../../App';

import styles from './Search.module.scss';

function Search() {
	const [search, setSearch] = useState('');

	const { setSearchValue } = useContext(SearchContext);

	const inputRef = useRef();

	useEffect(() => {
		setSearchValue('');
	}, []);

	const searchDebounce = useCallback(
		debounce((value) => {
			setSearchValue(value);
		}, 400),
		[]
	);

	const onInputChange = (e) => {
		setSearch(e.target.value);
		searchDebounce(e.target.value);
	};

	const onClearClick = () => {
		setSearch('');
		setSearchValue('');
		inputRef.current.focus();
	};

	return (
		<div className={styles.search}>
			<svg
				className={styles.img}
				width="18"
				height="18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m15.9 17.3-5.6-5.6A6.096 6.096 0 0 1 6.5 13c-1.817 0-3.354-.63-4.612-1.888C.63 9.853.001 8.316 0 6.5c0-1.817.63-3.354 1.888-4.612C3.147.63 4.684.001 6.5 0c1.817 0 3.354.63 4.612 1.888C12.37 3.147 12.999 4.684 13 6.5a6.096 6.096 0 0 1-1.3 3.8l5.625 5.625a.918.918 0 0 1 .275.675c0 .267-.1.5-.3.7a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275ZM6.5 11c1.25 0 2.313-.438 3.188-1.313S11.001 7.749 11 6.5c0-1.25-.438-2.313-1.313-3.188S7.749 1.999 6.5 2c-1.25 0-2.313.438-3.188 1.313S1.999 5.251 2 6.5c0 1.25.438 2.313 1.313 3.188S5.251 11.001 6.5 11Z"
					fill="#B3B3B3"
				/>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M0 0h18v18H0z" />
					</clipPath>
				</defs>
			</svg>

			<input
				className={styles.input}
				type="text"
				ref={inputRef}
				value={search}
				onChange={onInputChange}
				placeholder="Поиск пиццы..."
			/>

			{search && (
				<button
					className={styles.clear}
					type="button"
					onClick={onClearClick}
				></button>
			)}
		</div>
	);
}

export default Search;
