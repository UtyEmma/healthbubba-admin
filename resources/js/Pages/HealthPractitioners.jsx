import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PractitionerItem } from '@/Partials/HealthPractitioners/PractitionerItem';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { AdjustmentsHorizontalIcon, ChevronDownIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import { useMemo } from 'react';

export default function ({users}) {

    return (
        <AuthenticatedLayout title="Health Practitioners">
            <div className="card p-0 rounded-xl">
                <div className="p-4 flex space-x-2">
                    <div>
                        <Menu>
                            <MenuButton className="border-2 p-1 h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex">
                                <AdjustmentsHorizontalIcon className='size-5' />         
                                <span>Filter</span>
                                <ChevronDownIcon className='size-3' />         
                            </MenuButton>
                            <MenuItems transition anchor="bottom start" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                                <div className='p-1'>
                                    <MenuItem >
                                        <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Verified</button>
                                    </MenuItem>
                                </div>

                                <div className="border-t-[1.5px]"></div>

                                <div className='p-1'>
                                    <MenuItem>
                                        <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Pending</button>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>
                    </div>
                    <div>
                        <div className="relative bg-[#F9FAFB] flex items-center border border-[#E5E7EB] rounded-lg border-2">
                            <div className='px-2'>
                                <MagnifyingGlassIcon className='size-4 text-muted' />
                            </div>
                            <input type="text" placeholder='Search health practioner' className='pl-0 border-0 bg-transparent focus:ring-0 text-sm' />
                        </div>
                    </div>
                </div>

                <div className="border-t ml-4"></div>

                <div className="overflow-x-auto">
                    <table className='border-b'>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th >Practitioner ID</th>
                                <th>Specialization</th>
                                <th>License No.</th>
                                <th>License Expiry</th>
                                <th>Status</th>
                                <th>Consultations</th>
                                <th>Earnings</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.data.map((user) => <PractitionerItem key={user.id} user={user} />)
                            }
                        </tbody>
                    </table>
                </div>

                <Pagination items={users} />
            </div>
        </AuthenticatedLayout>
    )
}