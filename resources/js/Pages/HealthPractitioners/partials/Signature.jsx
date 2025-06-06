import { Badge } from '@/Components/Badge'
import Button from '@/Components/Button/Button'
import Disclose from '@/Components/Disclose'
import Swal from '@/Components/Swal'
import { router, usePage } from '@inertiajs/react'
import axios from 'axios'
import FsLightbox from 'fslightbox-react'
import React from 'react'
import {useState} from 'react'
import { toast } from 'react-toastify'

export default function ({user}) {

    const [show, setShow] = useState(false)
    const {api} = usePage().props
    const [loading, setLoading] = useState(false)
    const [loadingDisapproved, setLoadingDisapproved] = useState(false)

    const updateStatus = (status, close) => {
        status ? setLoading(true) : setLoadingDisapproved(true)
        router.post(route('signature.status', {user: user.id}), {status: !!status}, {
            onFinish: () => {
                setLoading(false)
                setLoadingDisapproved(false)
                close()
            }
        })
    }

    return (
        <div className="">
            { 
                user.doctor_signature

                ?

                <>
                    <div className="space-y-3">
                        <img onClick={() => setShow(!show)} className='cursor-pointer max-w-[30%]'  src={user.doctor_signature} />

                        <ul>
                            <li><strong>Uploaded At:</strong> {user.doctor_signature_date}</li>
                            <li><strong>Status:</strong> <Badge status={user.signature_verified ? 'verified' : 'unverified'} >{user.signature_verified ? 'Verified' : 'Unverified'}</Badge></li>
                        </ul>

                        <div className="space-x-4">
                            <Swal loading={loading} title='Are you sure you wish to approve this signature?' onConfirm={(close) => updateStatus(true, close)} className='btn btn-primary'>Approve</Swal>
                            <Swal loading={loadingDisapproved} title='Are you sure you wish to disapprove this signature?' onConfirm={(close) => updateStatus(false, close)} className='btn btn-danger' >Disapprove</Swal>
                        </div>
                    </div>

                    <FsLightbox
                        toggler={show} 
                        sources={[
                            user.doctor_signature
                        ]}
                    />
                </>

                :

                <p className="text-gray-500">No Signature Uploaded</p>
                
            }
        </div>
    )
}
