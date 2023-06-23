import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from 'aos';

const Pricing = () => {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 })
    // }, []);
    return (
        <div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Pricing Invoicing & billing
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        The payment feature is a crucial component of a logistics website that enables users to securely and conveniently process financial transactions related to their logistics services.
                    </p>
                </div>
                <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                    <div className="duration-300 transform bg-white border-l-4 border-orange-600 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">Payment Gateway Integration</h6>
                            <p className="text-sm text-gray-900">
                                The website can integrate with a secure payment gateway that allows users to make online payments using various methods such as credit cards, debit cards, digital wallets, or bank transfers.
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white border-l-4 border-orange-600 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">Order Invoicing and Billing</h6>
                            <p className="text-sm text-gray-900">
                                The website can generate invoices and bills for logistics services or product orders. Users can review and pay these invoices online, streamlining the billing process and reducing manual paperwork.
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white border-l-4 border-orange-600 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">
                                Payment Status Tracking
                            </h6>
                            <p className="text-sm text-gray-900">
                                Users should be able to track the status of their payments within the website. This provides transparency and allows users to verify successful payment transactions.
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white border-l-4 border-orange-600 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">Subscription or Recurring Payments</h6>
                            <p className="text-sm text-gray-900">
                                If the logistics services involve subscription-based models or recurring payments, the payment feature can support automated recurring billing, where users can set up periodic payments for ongoing services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-y-hidden bg-gray-100">
                <div className="mx-auto container px-4 xl:px-0 py-24">
                    <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-900">How Pricing Plan works?</h1>
                    <div className="md:mt-24">
                        <div className="hidden md:flex justify-center w-full">
                            <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
                                <div>
                                    <img className="focus:outline-none mt-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg" alt="how it work" />
                                </div>
                                <div>
                                    <img className="focus:outline-none mt-24" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt="" />
                                </div>
                                <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                                    <h1 className="focus:outline-none text-xl font-bold leading-5">Create a Wallet</h1>
                                    <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">Create a wallet by linking a payment method that you’re comfortable with. Paypal, Visa and more </h2>
                                </div>
                                <div>
                                    <img className="focus:outline-none mt-24" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt="" />
                                </div>
                                <img className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1" src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png" alt="" />
                            </div>
                            <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
                                <div>
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt="" />
                                </div>
                                <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                                    <h1 className="focus:outline-none text-xl font-bold leading-5">SignUp for an Account</h1>
                                    <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Sign up on our website and opt for a program that suits you the best . </h2>
                                </div>
                                <div>
                                    <img className="focus:outline-none mt-32" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg" alt="" />
                                </div>
                                <div>
                                    <img className="focus:outline-none mt-20" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt="" />
                                </div>
                                <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                                    <h1 className="focus:outline-none text-xl font-bold leading-5">Start your Transactions</h1>
                                    <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Start transactions right away. No more complicated process for anything else.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden flex flex-col items-center w-full">
                            <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg" alt="how it work" />
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt="" />
                            <div className="mt-10">
                                <h1 className="text-xl text-center tracking-wide leading-5 font-bold">SignUp for an Account</h1>
                                <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Sign up on our website and opt for a program that suits you the best .</h2>
                            </div>
                            <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg" alt="" />
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt="" />
                            <div className="mt-10">
                                <h1 className="text-xl tracking-wide text-center leading-5 font-bold">Create a Wallet</h1>
                                <h2 className="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide">Create a wallet by linking a payment method that you’re comfortable with. Paypal, Visa and more</h2>
                            </div>
                            <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt="" />
                            <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
                                <h1 className="text-xl text-center tracking-wide leading-5 font-bold">Start your Transactions</h1>
                                <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Start transactions right away. No more complicated process for anything else.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing