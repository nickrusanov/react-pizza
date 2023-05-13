import BackButton from '../UI/BackButton/BackButton';

import styles from './NotFoundContent.module.scss';

function NotFoundContent() {
	return (
		<main className={styles.content}>
			<h1 className={styles.title}>Страница не найдена</h1>
			<p className={styles.text}>Запрашиваемая вами страница не существует.</p>
			<BackButton />
		</main>
	);
}

export default NotFoundContent;
