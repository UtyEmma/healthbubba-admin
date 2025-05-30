import { Badge } from '@/Components/Badge'
import Currency from '@/Components/Currency'
import Disclose from '@/Components/Disclose'
import Modal from '@/Components/Modal'
import Swal from '@/Components/Swal'
import useModal from '@/Hooks/useModal'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CheckIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { Link, router } from '@inertiajs/react'
import React from 'react'
import UploadLicence from './UploadLicence'
import TableLink from '@/Components/Table/TableLink'

export const PractitionerItem = ({user}) => {

    const suspend = (close) => {
        router.get(route('users.suspend', {user: user.id}))
    }

    const approve = () => {
        router.get(route('practitioners.approve', {user: user.id}))
    }
    
    const disapprove = () => {
        router.get(route('practitioners.disapprove', {user: user.id}))

    }
    
    const destroy = (close) => {
        router.get(route('practitioners.destroy', {user: user.id}))
    }

    const modal = useModal()

    return (
        <tr>
            <TableLink href={route('practitioners.show', {user: user.id})}>{user.full_name}</TableLink>
            <TableLink href={route('practitioners.show', {user: user.id})}>{user.email}</TableLink>
            <TableLink href={route('practitioners.show', {user: user.id})}>{user.phone}</TableLink>
            {/* <td>Jane Smith</td> */}
            {/* <TableLink href={route('practitioners.show', {user: user.id})}>{user.licence_number}</TableLink>
            <td>
                <Disclose show={!!user.doctor_license} >
                    <a href={user.doctor_license} target='_blank' className='text-primary flex space-x-4 items-center'>View License</a>
                </Disclose>

                <Disclose show={!user.doctor_license}>
                    <UploadLicence user={user} />
                </Disclose>
            </td> */}
            {/* <td >
                <Disclose show={!!user.other_document} >
                    <a href={user.other_document} target='_blank' className='text-primary flex space-x-4 items-center'>View</a>
                </Disclose>
            </td> */}
            <TableLink href={route('practitioners.show', {user: user.id})}>
                <Badge status={user.status} >{user.status}</Badge>
            </TableLink>
            <TableLink href={route('practitioners.show', {user: user.id})}>{user.consultations}</TableLink>
            <TableLink href={route('practitioners.show', {user: user.id})}><Currency />{user.earnings.toLocaleString()}</TableLink>
            <td>
                <Menu>
                    <MenuButton className="btn border-2 p-1 bg-white rounded-lg">
                        <EllipsisHorizontalIcon className='size-5' />                                        
                    </MenuButton>
                    <MenuItems transition anchor="bottom end" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                        <div className='p-1'>
                            <MenuItem>
                                <Link className='inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10' href={route('practitioners.show', {user: user.id})} >View</Link>
                            </MenuItem>
                        </div>

                        <div className="border-t-[1.5px]"></div>

                        <div className='p-1'>
                            <MenuItem >
                                <Swal 
                                    title={user.is_active ? 'Suspend User' : 'Restore User'} 
                                    type={user.is_active ? 'warning' : 'success'} 
                                    confirmLabel={user.is_active ? 'Suspend User' : 'Restore User'}
                                    onConfirm={suspend} 
                                    caption={`Are you sure you want to ${user.is_active ? 'suspend' : 'restore'} this user's account?`} 
                                    className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">{user.is_active ? 'Suspend' : 'Restore'}</Swal>
                            </MenuItem>
                        </div>

                        <div className="border-t-[1.5px]"></div>

                        <div className='p-1'>
                            <MenuItem>
                                <Swal title="Unverify User" type={'danger'} onConfirm={disapprove} caption="Are you sure you want to unverify this user?" className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">
                                    Unverify User
                                </Swal>
                            </MenuItem>
                        </div>

                        <div className="border-t-[1.5px]"></div>

                        <div className='p-1'>
                            <MenuItem>
                                <Swal title="Delete User Account" type={'danger'} onConfirm={destroy} caption="Are you sure you want to delete this user's account? This action cannot be undone." className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Delete</Swal>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>
                {/* <Disclose show={user.is_doctor_verified} >
                </Disclose> */}
                
                {/* <Disclose show={!user.is_doctor_verified} >
                    <div className="flex items-center space-x-2">
                        <div>
                            <Swal title="Approve Verification Request" type={'success'} onConfirm={approve} caption="Are you sure you want to approve this verification request?" className="inline-flex w-full rounded-full p-2 text-primary bg-primary/10 hover:bg-primary hover:text-white">
                                <CheckIcon className='size-4' />
                            </Swal>
                        </div>

                        <div>
                            <Swal title="Decline Verification Request" type={'danger'} onConfirm={disapprove} caption="Are you sure you want to decline this verification request?" className="inline-flex w-full rounded-full p-2 text-red-600 bg-red-500/10 hover:bg-red-500 hover:text-white">
                                <XMarkIcon className='size-4' />
                            </Swal>
                        </div>
                    </div>
                </Disclose> */}
            </td>

            {/* <Modal className='h-[90vh] max-w-2xl' {...modal}>
                <div className="overflow-y-auto space-y-5">
                    <img src={user.doctor_license} className='w-full' alt="" />
            
                    <Disclose show={user.other_document}>
                        <img src={user.other_document} className='w-full' alt="" />
                    </Disclose>
                </div>
            </Modal> */}
        </tr>
    )
}
