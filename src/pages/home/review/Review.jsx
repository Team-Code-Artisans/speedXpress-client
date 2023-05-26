import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            },
        ],

    };
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className="text-2xl text-center lg:text-4xl tracking-normal md:leading-[1.4em] lg:leading-[1.2em] capitalize dark:text-snow-white">
                What our client<span className='text-yellow font-medium'> says</span>

            </h1>

            <div className="max-w-6xl mx-auto px-8 py-10">
                <Slider {...settings}>
                    {
                        [1, 2, 4, 5, 6].map(review => (

                            <ReviewCard key={review} />

                        ))
                    }
                </Slider>

            </div>
        </div>


    );
};

export default Review;

const ReviewCard = () => {
    return (
        <div className="px-5 py-8 border border-gray-200 rounded shadow max-w-2xl m-4 cursor-pointer">
            <div className="flex justify-center items-center gap-6">

                <img src="https://meetmighty.com/wp-themes/cargoton/wp-content/uploads/2021/04/5.png" alt="" className="block w-32 object-cover h-32" />
                <div className="text-left">
                    <div className="flex justify-between">
                        <p className="py-3.5">
                            {
                                [1, 2, 4, 5, 6].map(star => <AiFillStar key={star} className="inline-block text-amber-400" />)
                            }
                        </p>
                        <svg className="-mt-4" xmlns="http://www.w3.org/2000/svg" width="60" height="56" viewBox="0 0 60 54" fill="none"><path d="M49.75 27V26H48.75H39.375C36.8218 26 34.75 23.9282 34.75 21.375V6.375C34.75 3.82182 36.8218 1.75 39.375 1.75H54.375C56.9282 1.75 59 3.82182 59 6.375V34.5C59 44.3071 51.0571 52.25 41.25 52.25H40.3125C39.3062 52.25 38.5 51.4438 38.5 50.4375V44.8125C38.5 43.8062 39.3062 43 40.3125 43H41.25C45.939 43 49.75 39.189 49.75 34.5V27ZM16 27V26H15H5.625C3.07182 26 1 23.9282 1 21.375V6.375C1 3.82182 3.07182 1.75 5.625 1.75H20.625C23.1782 1.75 25.25 3.82182 25.25 6.375V34.5C25.25 44.3071 17.3071 52.25 7.5 52.25H6.5625C5.55619 52.25 4.75 51.4438 4.75 50.4375V44.8125C4.75 43.8062 5.55619 43 6.5625 43H7.5C12.189 43 16 39.189 16 34.5V27Z" stroke="#FFC794" strokeWidth="2"></path></svg>
                    </div>
                    <p className="text-slate-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio cupiditate, alias rem aliquid sint ipsam, quis repellat consequuntur velit, modi odit itaque soluta dolorem saepe quibusdam hic eos architecto!</p>

                    <footer>
                        <h5 className="text-lg font-medium py-2.5">By <span className="text-amber-500">Ashikur Rahamn</span></h5>
                        <p className="text-slate-600 text-sm">Cheif excutive</p>
                    </footer>
                </div>
            </div>


        </div>
    )
}