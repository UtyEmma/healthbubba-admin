import { useForm, usePage } from '@inertiajs/react'
import Button from '@/Components/Button/Button'
import Input from '@/Components/Form/Input'
import InputError from '@/Components/Form/InputError'
import Label from '@/Components/Form/Label'
import Password from '@/Components/Form/Password'
import { PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Select from '@/Components/Form/Select'

export default function EditForm({admin = null}) {

    const form = useForm({
		firstname: admin?.firstname,
		lastname: admin?.lastname,
		email: admin?.email,
		phone: admin?.phone,
		password: '',
        access_level: admin?.access_level
	})

    const { props } = usePage()

	const submit = (e) => {
		e.preventDefault()
		form.post(route('admins.update', {admin: admin?.id}))
	}

    return (
        <form onSubmit={submit} className="space-y-3">
            <div>
                <Label>First name</Label>
                <Input onChange={e => form.setData('firstname', e.currentTarget.value)} value={form.data.firstname} placeholder="First Name" className={'w-full'} />
                <InputError message={form.errors.firstname} />
            </div>
            
            <div>
                <Label>Last name</Label>
                <Input onChange={e => form.setData('lastname', e.currentTarget.value)} value={form.data.lastname} placeholder="Last Name" className={'w-full'} />
                <InputError message={form.errors.lastname} />
            </div>

            <div>
                <Label>Email Address</Label>
                <Input onChange={e => form.setData('email', e.currentTarget.value)} value={form.data.email} placeholder="Email Address" className={'w-full'} />
                <InputError message={form.errors.email} />
            </div>

            <div>
                <Label>Phone Number</Label>
                <Input onChange={e => form.setData('phone', e.currentTarget.value)} value={form.data.phone} placeholder="Phone Number" className={'w-full'} />
                <InputError message={form.errors.phone} />
            </div>

            <div>
                <Label>Select Role</Label>
                <Select onChange={e => form.setData('access_level', e.currentTarget.value)} value={form.data.access_level} className={'w-full'} >
                    <option value="" disabled>Select Role</option>
                    {Object.keys(props.roles).map(role => <option value={role} >{props.roles[role]}</option>)}
                </Select>
                <InputError message={form.errors.access_level} />
            </div>

            <div>
                <Label>Default Password</Label>
                <Password onChange={e => form.setData('password', e.currentTarget.value)} value={form.data.password} placeholder="Password" autoComplete='off'  className={'w-full'} />
                <InputError message={form.errors.password} />
            </div>

            <div className='pt-3'>
                <Button className='btn-primary w-full'>Create User <PlayIcon className='size-4 text-white/50' /> </Button>
            </div>
        </form>
    )
}
