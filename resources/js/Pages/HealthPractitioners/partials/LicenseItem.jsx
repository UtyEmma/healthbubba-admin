import Disclose from '@/Components/Disclose'
import Swal from '@/Components/Swal'
import Status from '@/Enums/Status'
import UploadLicence from '@/Partials/HealthPractitioners/UploadLicence'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { router } from '@inertiajs/react'
import React from 'react'
import EditLicenseStatus from './EditLicenseStatus'
import useModal from '@/Hooks/useModal'
import Button from '@/Components/Button/Button'

export default function ({license}) {

    const approve = () => {
        router.get(route('practitioners.approve', {user: license.id}))
    }
    
    const disapprove = () => {
        router.get(route('practitioners.disapprove', {user: license.id}))

    }

    const modal = useModal()

    return (
        <tr>
            <td>
                <a href={license.license_image} target='_blank' className='text-primary flex space-x-4 items-center'>View License</a>
            </td>
            <td>
                {license.expiration_date}
            </td>

            <td>
                {license.qualification?.qualification_name}
            </td>
            <td>{license.status}</td>
            <td>
                <Button onClick={modal.open} >Update</Button>
                <EditLicenseStatus {...modal} license={license} />
                {/* <Disclose show={license.status == Status.UNDER_REVIEW} >
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
        </tr>
    )
}
