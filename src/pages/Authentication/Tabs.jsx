import { MdSwitchAccount, MdDirectionsBike } from 'react-icons/md'
import { AiOutlineShop } from 'react-icons/ai'

const Tabs = ({ activeStatus, setActiveStatus }) => {
    return (
        <div className="h-12 bg-white shadow rounded mt-8 mb-6">
            <ul className="flex gap-4 md:gap-10 border-b px-5 cursor-pointer">
                <li onClick={() => setActiveStatus(1)} className={activeStatus == 1 ? "text-sm md:text-xl border-blue-700 pt-3 rounded-t text-blue-700" : "text-sm md:text-xl text-gray-600 py-3 flex items-center hover:text-blue-700"}>
                    <div className="flex md:gap-2 gap-1 items-center mb-3">
                        <MdSwitchAccount size={'1.5rem'} />
                        <span className="ml-1 font-normal">Regular</span>
                    </div>
                    {activeStatus == 1 && <div className="w-full h-1 bg-blue-700 rounded-t-md" />}
                </li>
                <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "text-sm md:text-xl border-blue-700 pt-3 rounded-t text-blue-700" : "text-sm md:text-xl text-gray-600 py-3 flex items-center hover:text-blue-700"}>
                    <div className="flex md:gap-2 gap-1 items-center mb-3">
                        <AiOutlineShop size={'1.5rem'} />
                        <span className="ml-1 font-normal">Merchant</span>
                    </div>
                    {activeStatus == 2 && <div className="w-full h-1 bg-blue-700 rounded-t-md" />}
                </li>
                <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "text-sm md:text-xl border-blue-700 pt-3 rounded-t text-blue-700" : "text-sm md:text-xl text-gray-600 py-3 flex items-center hover:text-blue-700"}>
                    <div className="flex gap-1 md:gap-2 items-center mb-3">
                        <MdDirectionsBike size={'1.5rem'} />
                        <span className="ml-1 font-normal">Employee</span>
                    </div>
                    {activeStatus == 3 && <div className="w-full h-1 bg-blue-700 rounded-t-md" />}
                </li>
            </ul>
        </div>
    );
};
export default Tabs;
