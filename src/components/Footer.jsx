function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__links">
					<div className="footer__box">
						<h3 className="footer__title">
							<span className="footer__title-text">Реакт Пицца</span>
						</h3>
						<ul className="footer__list">
							<li className="footer__item">
								<a className="footer__item-link" href="#">
									О компании
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__item-link" href="#">
									Реакт-книга
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__item-link" href="#">
									Блог "Сила ума"
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__item-link" href="#">
									Реакт ИС
								</a>
							</li>
						</ul>
					</div>
					<div className="footer__box">
						<h3 className="footer__title">
							<span className="footer__title-text">Работа</span>
						</h3>
						<ul className="footer__list">
							<li className="footer__item">
								<a className="footer__item-link" href="#">
									В пиццерии
								</a>
							</li>
						</ul>
					</div>
					<div className="footer__box">
						<h3 className="footer__title">
							<span className="footer__title-text">Партнёрам</span>
						</h3>
						<ul className="footer__list">
							<li className="footer__item">
								<a className="footer__item-link" href="#">
									Франшиза
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__item-link" href="#">
									Инвестиции
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__item-link" href="#">
									Поставщикам
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__item-link" href="#">
									Предложить помещение
								</a>
							</li>
						</ul>
					</div>
					<div className="footer__box">
						<h3 className="footer__title">
							<span className="footer__title-text">Это интересно</span>
						</h3>
						<ul className="footer__list">
							<li className="footer__item">
								<a className="footer__item-link" href="#">
									Экскурссии
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__item-link" href="#">
									Мастер-классы
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__item-link" href="#">
									Корпоративные заказы
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="footer__copy">
					<p className="footer__copy-text">
						© 2023 ООО "Реакт Франчайзинг", ИНН 1101140415
					</p>
					<p className="footer__copy-text">
						Республика Коми, г. Сыктывкар, Октябрьский проспект, д. 16
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
