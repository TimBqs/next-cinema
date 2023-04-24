import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'

import Meta from '@/utils/meta/Meta'

import Statistics from './statistics/Statistics'

const Admin: FC = () => {
	return (
		<Meta title="Admin Panel">
			<AdminNavigation />
			<Heading title="Some statistics" />
			<Statistics />
		</Meta>
	)
}

export default Admin
