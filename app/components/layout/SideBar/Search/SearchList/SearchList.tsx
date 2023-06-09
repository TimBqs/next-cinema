import Image from "next/legacy/image";
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/config/url.config'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link
						title={movie.title}
						key={movie._id}
						href={`/movie/${movie.slug}`}
					>
						<Image
							src={movie.poster || ''}
							width={271}
							height={429}
							objectFit="cover"
							objectPosition="top"
							alt={movie.title}
							draggable={false}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found!</div>
			)}
		</div>
	)
}

export default SearchList
