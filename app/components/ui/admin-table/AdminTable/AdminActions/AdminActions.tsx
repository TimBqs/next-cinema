import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import styles from './AdminActions.module.scss'

interface IAdminActions {
	editUrl: string
	removeHandler: () => void
}

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter()

	const deleteUser = () => {
		if (confirm('You sure that you want delete this user?')) {
			removeHandler()
		} else return false
	}

	return (
		<div className={styles.actions}>
			<button onClick={() => push(editUrl)}>
				<MaterialIcon name="MdEdit" />
			</button>
			<button onClick={deleteUser}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	)
}

export default AdminActions
