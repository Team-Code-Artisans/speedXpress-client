import bannerImage from "../../../Assets/Images/Yellow-Truck-PNG-Image.png";

const Banner = () => {
    return (
        <div className='bg-[#101920]'>
            <div id="Banner" className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20 ">

                <h1 className="px-4 md:px-8 text-4xl md:text-6xl tracking-normal leading-relaxed uppercase font-bold py-8 text-fuchsia-50" >
                    Experience the <span className='text-yellow'> best logistic</span> solution for your need
                </h1>


                <div className="md:flex  lg:flex justify-between items-center  relative md:px-10 md:gap-x-8 lg:px-14">
                    <div className="p-2 max-w-fit mb-6">
                        <h5 className='text-lg text-left text-slate-400 mb-6'>We deliver, Track and ship</h5>

                        <div className="p-3.5 bg-[#192732] inline-block rounded-l-lg -mb-2 ">
                            <span className='text-center text-yellow'> Track here</span>
                        </div>
                        <div className="py-5 px-4 bg-[#192732] rounded-lg">
                            <div className="flex items-center gap-4 rounded-lg">
                                <input type="text" placeholder='Tracking Id' className='border border-slate-500 rounded-lg px-6 py-2.5 bg-transparent text-slate-200' />
                                <button className='text-slate-900 bg-yellow px-8 py-2.5 rounded-lg'>TRACK</button>
                            </div>
                        </div>

                    </div>

                    <img src={bannerImage} alt="truck" className="block max-w-xl md:max-w-2xl -mr-[4%] md:-mr-[20%] py-10 lg:pb-8 xl:max-w-4xl xl:-mr-[30%]" />
                </div>
            </div>
        </div>
    );
};

export default Banner;