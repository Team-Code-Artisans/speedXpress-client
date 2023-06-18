import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShop, AiOutlineMenu } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { GoSignOut } from 'react-icons/go';
import { MdInsertEmoticon, MdPayment } from 'react-icons/md';
import { AuthContext } from '../../../../contexts/AuthProvider';

export default function AdminDropdown() {

    const { logout } = useContext(AuthContext)

    return (
        <>
            <Menu as="div" className="relative inline-block text-left z-10">
                <div>
                    <Menu.Button className="text-white">
                        <AiOutlineMenu size={'2rem'} />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="visible transition duration-300 opacity-100 bg-white shadow rounded mt-2 py-1 w-48 absolute -left-16">
                        <div className="p-1">
                            <Menu.Item>
                                <Link to={'/dashboard/admin/profile'} className="cursor-pointer text-black leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                                    <CgProfile size={'1.5rem'} />
                                    <span className="px-2">Return</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={'/dashboard/admin/profile'} className="cursor-pointer text-black leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                                    <CgProfile size={'1.5rem'} />
                                    <span className="px-2">Invoices</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={'/dashboard/admin/profile'} className="cursor-pointer text-black leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                                    <CgProfile size={'1.5rem'} />
                                    <span className="px-2">Profile</span>
                                </Link>
                            </Menu.Item>
                        </div>
                        <div className="p-1">
                            <Menu.Item>
                                <div className="cursor-pointer text-black leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center" onClick={() => logout()}>
                                    <GoSignOut size={'1.5rem'} />
                                    <span className="px-2">Sign Out</span>
                                </div>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}