function Pagination({ pages, page, setPage }) {
	return (
		<div className="catalog__pagination pagination">
			<ul className="pagination__list">
				{page !== 1 && (
					<li className="pagination__item">
						<button
							className="pagination__item-btn"
							type="button"
							onClick={() => setPage(page - 1)}
						>
							<svg
								className="pagination__item-arrow"
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
						</button>
					</li>
				)}

				{[...new Array(pages)].map((_, index) => (
					<li className="pagination__item" key={index}>
						<button
							className={`pagination__item-btn${
								page === index + 1 ? ' pagination__item-btn--active' : ''
							}`}
							type="button"
							onClick={() => setPage(index + 1)}
						>
							{index + 1}
						</button>
					</li>
				))}

				{page !== pages && (
					<li className="pagination__item">
						<button
							className="pagination__item-btn"
							type="button"
							onClick={() => setPage(page + 1)}
						>
							<svg
								className="pagination__item-arrow pagination__item-arrow--next"
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
						</button>
					</li>
				)}
			</ul>
		</div>
	);
}

export default Pagination;
