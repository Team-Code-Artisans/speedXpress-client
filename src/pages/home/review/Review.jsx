import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import man1 from '../../../Assets/Images/man1.png'
import man2 from '../../../Assets/Images/man2.png'
import women1 from '../../../Assets/Images/women1.png'
import women2 from '../../../Assets/Images/women2.png'

const reviews = [
    {
        Name: "Michael Johnson",
        Profession: "Manufacturing Manager",
        ReviewDetails:
            "I've been using Speed Xpress for our logistics needs, and they have been an absolute game-changer. The website's user-friendly interface and real-time tracking have made it a breeze to manage our shipments. Highly recommend!",
        img: `${man1}`
    },
    {
        Name: "Sarah Thompson",
        Profession: "Small Business Owner",
        ReviewDetails:
            "I can't say enough good things about Speed Xpress. As a small business owner, their logistics services have been a lifesaver. Their attention to detail and commitment to customer satisfaction are unparalleled!",
        img: `${women1}`
    },
    {
        Name: "David Peterson",
        Profession: "Online Retailer",
        ReviewDetails:
            "Speed Xpress has revolutionized our shipping process. Their comprehensive logistics solutions have simplified our operations, allowing us to focus on growing our online retail business. We couldn't be happier with their services!",
        img: `${man2}`
    },
    {
        Name: "Jennifer Lee",
        Profession: "Freelance Designer",
        ReviewDetails:
            "I rely on Speed Xpress for all my shipping needs, and they never disappoint. Their logistics website is a dream to use - simple, intuitive, and efficient. Highly recommended for freelancers and small businesses!",
        img: `${women2}`
    }
]

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
        <div
            className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 py-8">
            <h1 className="text-3xl font-semibold text-center lg:text-5xl tracking-normal md:leading-[1.4em] lg:leading-[1.2em] capitalize">
                What our client<span className='text-blue-500 font-medium'> says</span>
            </h1>

            <div className="max-w-6xl mx-auto px-8 py-10">
                <Slider {...settings}>
                    {
                        reviews.map(review => (
                            <ReviewCard key={review} review={review} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Review;

const ReviewCard = ({ review }) => {
    const { Name, Profession, ReviewDetails, img } = review
    return (
        <div className="px-5 py-8 border border-gray-200 rounded shadow max-w-2xl m-4 cursor-pointer">
            <div className="block md:flex justify-center items-center gap-6">

                <img src={img} loading="lazy" alt="image" className="block w-32 object-cover h-32" />
                <div className="text-left">
                    <div className="flex justify-between">
                        <p className="py-3.5">
                            {
                                [1, 2, 3, 4, 5].map(star => <AiFillStar key={star} className="inline-block text-blue-400" />)
                            }
                        </p>
                        <FaQuoteRight size={'2rem'} className="text-blue-500" />
                    </div>
                    <p className="text-slate-600 text-sm">{ReviewDetails}</p>
                    <footer>
                        <h5 className="text-lg font-medium py-2.5">By <span className="text-blue-500">{Name}</span></h5>
                        <p className="text-slate-600 text-sm">{Profession}</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}
