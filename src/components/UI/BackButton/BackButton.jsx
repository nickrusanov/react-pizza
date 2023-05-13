import { Link } from 'react-router-dom';

import styles from './BackButton.module.scss';

function BackButton() {
	return (
		<Link className={styles.link} to="/">
			Вернуться назад
		</Link>
	);
}

export default BackButton;
