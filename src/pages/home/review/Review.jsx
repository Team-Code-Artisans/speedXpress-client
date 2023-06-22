import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from 'aos';

const Review = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
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
            data-aos="zoom-out"
            className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className="text-2xl text-center lg:text-4xl tracking-normal md:leading-[1.4em] lg:leading-[1.2em] capitalize dark:text-snow-white">
                What our client<span className='text-yellow font-medium'> says</span>

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

                <img src={img} alt="" className="block w-32 object-cover h-32" />
                <div className="text-left">
                    <div className="flex justify-between">
                        <p className="py-3.5">
                            {
                                [1, 2, 3, 4, 5].map(star => <AiFillStar key={star} className="inline-block text-amber-400" />)
                            }
                        </p>
                        <svg className="-mt-4" xmlns="http://www.w3.org/2000/svg" width="60" height="56" viewBox="0 0 60 54" fill="none"><path d="M49.75 27V26H48.75H39.375C36.8218 26 34.75 23.9282 34.75 21.375V6.375C34.75 3.82182 36.8218 1.75 39.375 1.75H54.375C56.9282 1.75 59 3.82182 59 6.375V34.5C59 44.3071 51.0571 52.25 41.25 52.25H40.3125C39.3062 52.25 38.5 51.4438 38.5 50.4375V44.8125C38.5 43.8062 39.3062 43 40.3125 43H41.25C45.939 43 49.75 39.189 49.75 34.5V27ZM16 27V26H15H5.625C3.07182 26 1 23.9282 1 21.375V6.375C1 3.82182 3.07182 1.75 5.625 1.75H20.625C23.1782 1.75 25.25 3.82182 25.25 6.375V34.5C25.25 44.3071 17.3071 52.25 7.5 52.25H6.5625C5.55619 52.25 4.75 51.4438 4.75 50.4375V44.8125C4.75 43.8062 5.55619 43 6.5625 43H7.5C12.189 43 16 39.189 16 34.5V27Z" stroke="#FFC794" strokeWidth="2"></path></svg>
                    </div>
                    <p className="text-slate-600 text-sm">{ReviewDetails}</p>

                    <footer>
                        <h5 className="text-lg font-medium py-2.5">By <span className="text-amber-500">{Name}</span></h5>
                        <p className="text-slate-600 text-sm">{Profession}</p>
                    </footer>
                </div>
            </div>


        </div>
    )
}

const reviews = [
    {
        Name: "Michael Johnson",
        Profession: "Manufacturing Manager",
        ReviewDetails:
            "I've been using Speed Xpress for our logistics needs, and they have been an absolute game-changer. Their seamless logistics management solutions have streamlined our supply chain, resulting in increased efficiency and cost savings. The website's user-friendly interface and real-time tracking have made it a breeze to manage our shipments. Highly recommend!",
        img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R52520144&semt=sph"
    },
    {
        Name: "Sarah Thompson",
        Profession: "Small Business Owner",
        ReviewDetails:
            "I can't say enough good things about Speed Xpress. As a small business owner, their logistics services have been a lifesaver. From warehousing to shipping, they handle everything with utmost professionalism. The website is intuitive, making it easy to place orders and track shipments. Their attention to detail and commitment to customer satisfaction are unparalleled!",
        img: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&uid=R52520144&semt=sph"
    },
    {
        Name: "David Peterson",
        Profession: "Online Retailer",
        ReviewDetails:
            "Speed Xpress has revolutionized our shipping process. Their comprehensive logistics solutions have simplified our operations, allowing us to focus on growing our online retail business. The website provides full visibility into our shipments, and their prompt customer support team has been incredibly helpful. We couldn't be happier with their services!",
        img: "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?size=626&ext=jpg&uid=R52520144&semt=sph"
    },
    {
        Name: "Jennifer Lee",
        Profession: "Freelance Designer",
        ReviewDetails:
            "I rely on Speed Xpress for all my shipping needs, and they never disappoint. Their logistics website is a dream to use - simple, intuitive, and efficient. From domestic to international shipments, they handle it all seamlessly. Their competitive pricing and exceptional service make them my go-to logistics partner. Highly recommended for freelancers and small businesses!",
        img: "https://img.freepik.com/premium-photo/woman-wearing-headphones-with-microphone_782419-159262.jpg?size=626&ext=jpg&uid=R52520144&semt=sph"
    }
]