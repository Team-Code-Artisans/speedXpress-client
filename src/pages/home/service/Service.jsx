import { MdOutlineShareLocation, MdAddHome, MdAttachMoney } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <div className="max-w-screen-xl mx-auto rounded-2xl bg-white shadow-xl p-8 -mt-10 z-20">
            <div className="grid md:grid-cols-2 gap-4 pb-8">
                <div className='space-y-6'>
                    <Link
                        className="group relative inline-block text-sm font-medium text-orange-600 focus:outline-none focus:ring active:text-orange-500"
                    >
                        <span
                            className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-orange-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0 rounded-full"
                        ></span>

                        <span className="relative block border border-current bg-white px-8 py-3 font-bold rounded-full">
                            FEATURES
                        </span>
                    </Link>
                    <h2 className="lg:text-4xl font-bold text-4xl lg:max-w-md">
                        WHAT WE OFFER
                    </h2>
                </div>
                <p className="text-xl text-gray-600 border-l-4 border-orange-600 pl-8  flex items-center">
                    Collaboratively customize front-end materials with standardized infomediaries. Holisticly engineer performance based value. Assertively benchmark turnkey web-readiness rather than long.
                </p>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                <div
                    className="block space-y-6 rounded-xl bg-sky-100 p-4 sm:p-6 lg:p-8"
                >
                    <div className='bg-orange-600 rounded-full p-2 inline-block shadow-xl'>
                        <MdOutlineShareLocation size={'4rem'} className='text-white' />
                    </div>

                    <h3 className="text-xl font-semibold sm:text-2xl text-black">
                        TRANSPARENT PRICING
                    </h3>

                    <p className="text-lg text-gray-600 ">
                        Globally initiate resource maximizing to-
                        tal linkage via enabled process
                        improvements.
                    </p>
                </div>
                <div
                    className="block space-y-6 rounded-xl bg-pink-100 p-4 sm:p-6 lg:p-8"
                >
                    <div className='bg-orange-600 rounded-full p-2 inline-block shadow-xl'>
                        <MdAddHome size={'4rem'} className='text-white' />
                    </div>

                    <h3 className="text-xl font-semibold sm:text-2xl text-black">
                        WAREHOUSE STORAGE
                    </h3>

                    <p className="text-lg text-gray-600 ">
                        Globally initiate resource maximizing to-
                        tal linkage via enabled process
                        improvements.
                    </p>
                </div>
                <div
                    className="block space-y-6 rounded-xl bg-orange-100 p-4 sm:p-6 lg:p-8"
                >
                    <div className='bg-orange-600 rounded-full p-2 inline-block shadow-xl'>
                        <MdAttachMoney size={'4rem'} className='text-white' />
                    </div>

                    <h3 className="text-xl font-semibold sm:text-2xl text-black">
                        ONLINE TRACKING
                    </h3>

                    <p className="text-lg text-gray-600 ">
                        Globally initiate resource maximizing to-
                        tal linkage via enabled process
                        improvements.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Service;