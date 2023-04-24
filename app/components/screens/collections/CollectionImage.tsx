import Image from 'next/legacy/image'
import { FC } from 'react'

import styles from './Collections.module.scss'
import { ICollection } from './collections.interface'

const CollectionImage: FC<{ collection: ICollection }> = ({
	collection: { image, title },
}) => {
	return <Image alt={title} draggable={false} layout="fill" src={image} />
}
export default CollectionImage
