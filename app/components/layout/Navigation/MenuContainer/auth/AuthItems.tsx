import dynamic from 'next/dynamic'
import { FC, useEffect, useState } from 'react'
import { useFormState } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

import { IUserState } from '@/store/user/user.interface'

// import MenuItem from '../MenuItem'

// import LogoutButton from './LogoutButton'

const MenuItem = dynamic(() => import('../MenuItem'), { ssr: false })
const LogoutButton = dynamic(() => import('./LogoutButton'))

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
