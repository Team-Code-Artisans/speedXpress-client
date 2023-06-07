import { MdPayment, MdOutlinePayments, MdPendingActions } from 'react-icons/md'
import { FiDollarSign } from 'react-icons/fi'

const PaymentSummary = () => {
    return (
        <div className='my-10'>
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white pb-4">Payment Summary</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                <div
                    className=" space-y-4 rounded-xl bg-green-100 p-2 md:p-4 shadow-xl"
                >
                    <div className='bg-green-200 rounded-2xl p-2 inline-block shadow-xl'>
                        <MdPayment size={'2rem'} className='text-green-600' />
                    </div>

                    <h3 className="text-xl font-semibold sm:text-2xl text-black">
                        Payment Processed
                    </h3>

                    <p className="text-lg text-gray-600 ">
                        <span className=' text-2xl font-semibold'>234</span> <FiDollarSign className='inline-block' />
                    </p>
                </div>
                <div
                    className=" space-y-4 rounded-xl bg-orange-100 p-2 md:p-4 shadow-xl"
                >
                    <div className='bg-orange-200 rounded-2xl p-2 inline-block shadow-xl'>
                        <MdOutlinePayments size={'2rem'} className=' text-orange-600' />
                    </div>

                    <h3 className="text-xl font-semibold sm:text-2xl text-black">
                        Due Amount
                    </h3>

                    <p className="text-lg text-gray-600 ">
                        <span className=' text-2xl font-semibold'>234</span> <FiDollarSign className='inline-block' />
                    </p>
                </div>
                <div
                    className=" space-y-4 rounded-xl bg-blue-100 p-2 md:p-4 shadow-xl"
                >
                    <div className='bg-blue-200 rounded-2xl p-2 inline-block shadow-xl'>
                        <MdPendingActions size={'2rem'} className='text-blue-600' />
                    </div>

                    <h3 className="text-xl font-semibold sm:text-2xl text-black">
                        Pending Amount
                    </h3>

                    <p className="text-lg text-gray-600 ">
                        <span className=' text-2xl font-semibold'>234</span> <FiDollarSign className='inline-block' />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PaymentSummary