import DatePicker from '@/Components/Form/DatePicker';
import Pagination from '@/Components/Pagination';
import useSearchParams from '@/Hooks/useSearchParams';
import SettingIcon from '@/Icons/SettingIcon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { StatsItem } from '@/Partials/Stats/StatsItem';
import TransactionItem from '@/Partials/Transactions/TransactionItem';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Head, router } from '@inertiajs/react';

export default function ({transactions, stats}) {

    const params = useSearchParams()

    return (
        <AuthenticatedLayout title="Transactions">
            <Head title='Transactions' />

            <div className="grid md:grid-cols-4 grid-cols-1 gap-3 mb-5">
                <StatsItem title={'Total Transactions'} amount={stats.total} direction={Direction.up} percentage={36} />
            </div>

            <div className="card p-0 rounded-xl">
                <div className="justify-between items-center md:flex p-4">
                    <div>
                        <h4 className='font-semibold'>Transactions</h4>
                    </div>
                    <div className="md:flex space-y-2 md:space-y-0 md:space-x-2">
                        <div>
                            <DatePicker val={{endDate: params.endDate, startDate: params.startDate}} onChange={(value) => router.reload({data: value})} />
                        </div>
                        <div>
                            <Menu>
                                <MenuButton className="border-2 py-2 h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex font-medium">
                                    <SettingIcon className='size-5' />         
                                    <span>All Status</span>
                                    <ChevronDownIcon className='size-3' />         
                                </MenuButton>
                                <MenuItems transition anchor="bottom start" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                                    <div className='p-1'>
                                        <MenuItem >
                                            <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">All</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Successful</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Failed</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button className="inline-flex w-full text-sm rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Processing</button>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>

                <div className="border-t ml-4"></div>

                <div className="overflow-x-auto">
                    <table className='border-b'>
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Date/Time</th>
                                <th>Patient name</th>
                                <th>Email Address</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {transactions.data.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />)}
                        </tbody>
                    </table>

                    {
                            transactions.data?.length < 1 

                            ?

                            <p className='text-center py-3' >No records found</p>

                            :

                            ''
                        }
                </div>

                <Pagination items={transactions} />
            </div>
        </AuthenticatedLayout>
    )
}
