import { BsBoxArrowRight, BsBoxSeam } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { RxCircleBackslash } from 'react-icons/rx';

const Tabs = ({ activeStatus, setActiveStatus }) => {
    return (
        <div className="h-12 bg-white shadow rounded mb-6">
            <ul className="flex gap-4 md:gap-10 px-5 cursor-pointer">
                <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "text-sm md:text-lg border-orange-700 pt-3 rounded-t text-orange-700" : "text-sm md:text-lg text-gray-600 py-3 flex items-center hover:text-orange-700"}>
                    <div className="flex md:gap-2 gap-1 items-center mb-3">
                        <BsBoxArrowRight size={'1.2rem'} />
                        <span className="ml-1 font-normal">Pending</span>
                    </div>
                    {activeStatus == 2 && <div className="w-full h-1 bg-orange-700 rounded-t-md" />}
                </li>
                <li onClick={() => setActiveStatus(4)} className={activeStatus == 4 ? "text-sm md:text-lg border-orange-700 pt-3 rounded-t text-orange-700" : "text-sm md:text-lg text-gray-600 py-3 flex items-center hover:text-orange-700"}>
                    <div className="flex gap-1 md:gap-2 items-center mb-3">
                        <FiTruck size={'1.2rem'} />
                        <span className="ml-1 font-normal">In-transit</span>
                    </div>
                    {activeStatus == 4 && <div className="w-full h-1 bg-orange-700 rounded-t-md" />}
                </li>
                <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "text-sm md:text-lg border-orange-700 pt-3 rounded-t text-orange-700" : "text-sm md:text-lg text-gray-600 py-3 flex items-center hover:text-orange-700"}>
                    <div className="flex gap-1 md:gap-2 items-center mb-3">
                        <BsBoxSeam size={'1.2rem'} />
                        <span className="ml-1 font-normal">Completed</span>
                    </div>
                    {activeStatus == 3 && <div className="w-full h-1 bg-orange-700 rounded-t-md" />}
                </li>
                <li onClick={() => setActiveStatus(5)} className={activeStatus == 5 ? "text-sm md:text-lg border-orange-700 pt-3 rounded-t text-orange-700" : "text-sm md:text-lg text-gray-600 py-3 flex items-center hover:text-orange-700"}>
                    <div className="flex gap-1 md:gap-2 items-center mb-3">
                        <RxCircleBackslash size={'1.2rem'} />
                        <span className="ml-1 font-normal">Return</span>
                    </div>
                    {activeStatus == 5 && <div className="w-full h-1 bg-orange-700 rounded-t-md" />}
                </li>
            </ul>
        </div>
    );
};
export default Tabs;
