
import video from "../../../Assets/Images/logistics.mp4";
import { toast } from "react-hot-toast"
const About = () => {
    return (

        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-16 ">
            <div className="p-1 flex flex-col sm:flex-col md:flex-row gap-8 justify-between items-center">
                <h1 className="text-4xl  lg:text-6xl tracking-normal md:leading-[1.4em] lg:leading-[1.2em] capitalize">
                    Deliver Your <span className='text-orange-400 font-medium'>Logistic</span> Safely and Quickly.
                </h1>
                <div className="">

                    <p className="text-base mb-4 font-inter text-dark-toned ">

                        <i className='font-medium   text-black text-3xl'> We aims</i>  to simplify the entire event planning process for customers and event planners by providing a platform that helps them with everything they need for an event, including event space or venue catering, event dress decoration, and budget planning.
                    </p>

                    <button className="bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-400 py-3.5 px-8 rounded shadow-md hover:shadow-none active:scale-95 duration-150 transition-all scale-100 text-white font-medium uppercase">
                        <span className="">Get started</span>
                    </button>
                </div>
            </div>

            <div className="max-w-full mx-auto my-12 lg:my-16  shadow-lg ">
                <video src={video} autoPlay loop muted className='w-full max-h-[380px] object-cover' />
            </div>
        </div>
    );
};

export default About;


export const WhyUs = () => {
    return (
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <p className="text-center mb-8 max-w-xl mx-auto text-slate-700 font-medium text-2xl">We are being trusted by varity of companies and we have a wide range of merchants and customer world wide. That is why you shoud choose us✌</p>
            <div className="grid row-gap-8 sm:grid-cols-3">
                <div className="text-center">
                    <h6 className="text-5xl font-bold text-deep-purple-accent-400">144K</h6>
                    <p className="font-bold">Downloads</p>
                </div>
                <div className="text-center">
                    <h6 className="text-5xl font-bold text-deep-purple-accent-400">12.9K</h6>
                    <p className="font-bold">Subscribers</p>
                </div>
                <div className="text-center">
                    <h6 className="text-5xl font-bold text-deep-purple-accent-400">27.3K</h6>
                    <p className="font-bold">Users</p>
                </div>
            </div>
        </div>
    )
}