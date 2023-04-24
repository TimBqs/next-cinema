import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { UserService } from '@/services/user.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toastr-error'

import { IProfileInput } from './profile.interface'

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading } = useQuery(['profile'], () => UserService.getProfile(), {
		onSuccess: ({ data }) => {
			setValue('email', data.email)
		},
		onError: (error) => {
			toastError(error, 'Get Profile')
		},
	})

	const { mutateAsync } = useMutation(
		'update user',
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onError: (error) => {
				toastError(error, 'Update Profile')
			},
			onSuccess: () => {
				toastr.success('Update user', 'update was successful')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
