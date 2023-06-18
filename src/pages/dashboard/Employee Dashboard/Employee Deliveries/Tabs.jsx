import { BsBoxArrowRight, BsBoxSeam, BsBoxes } from 'react-icons/bs'

const Tabs = ({ activeStatus, setActiveStatus }) => {
    return (
        <div className="h-12 bg-white shadow rounded mb-6">
            <ul className="flex gap-4 md:gap-10 px-5 cursor-pointer">
                <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "text-sm md:text-xl border-orange-700 pt-3 rounded-t text-orange-700" : "text-sm md:text-xl text-gray-600 py-3 flex items-center hover:text-orange-700"}>
                    <div className="flex md:gap-2 gap-1 items-center mb-3">
                        <BsBoxArrowRight size={'1.5rem'} />
                        <span className="ml-1 font-normal">Pending</span>
                    </div>
                    {activeStatus == 2 && <div className="w-full h-1 bg-orange-700 rounded-t-md" />}
                </li>
                <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "text-sm md:text-xl border-orange-700 pt-3 rounded-t text-orange-700" : "text-sm md:text-xl text-gray-600 py-3 flex items-center hover:text-orange-700"}>
                    <div className="flex gap-1 md:gap-2 items-center mb-3">
                        <BsBoxSeam size={'1.5rem'} />
                        <span className="ml-1 font-normal">Completed</span>
                    </div>
                    {activeStatus == 3 && <div className="w-full h-1 bg-orange-700 rounded-t-md" />}
                </li>
            </ul>
        </div>
    );
};
export default Tabs;
