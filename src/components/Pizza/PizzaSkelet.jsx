import styles from './PizzaSkelet.module.scss';

function PizzaSkelet() {
	return (
		<li className={styles.skelet}>
			<div className={styles.imgWrapper}>
				<div className={styles.img}></div>
			</div>

			<div className={styles.title}></div>

			<div className={styles.select}></div>

			<div className={styles.box}>
				<div className={styles.price}></div>
				<div className={styles.buy}></div>
			</div>
		</li>
	);
}

export default PizzaSkelet;
