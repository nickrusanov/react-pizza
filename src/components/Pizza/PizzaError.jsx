import styles from './PizzaError.module.scss';

function PizzaError() {
	return (
		<div className={styles.error}>
			<h1 className={styles.title}>Произошла ошибка</h1>
			<p className={styles.text}>
				К сожалению, не удалось получить данные.
				<br />
				Попробуйте повторить попытку позже.
			</p>
		</div>
	);
}

export default PizzaError;
