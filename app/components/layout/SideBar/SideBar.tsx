import { FC } from 'react'

import MoviesContainer from './MoviesContainer/MoviesContainer'
import Search from './Search/Search'
import styles from './SideBar.module.scss'

const SideBar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default SideBar
