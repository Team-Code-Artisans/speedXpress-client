import { useEffect } from "react";
import About from "./about/About";
import Faq from "./faq/Faq";
import Feature from "./feature/Feature";
import Review from "./review/Review";
import Service from "./service/Service";
import Hero3 from "./hero/hero";
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import GetStarted from "./GetStarted/GetStarted";
import Offer from "./offer/offer";

const Home = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0);

    // }, [])
    return (
        <div>
            <Hero3 />
            <Service />
            <Section1 />
            <Feature />
            <Section2 />
            <Offer />
            <Review />
            <Faq />
            <GetStarted />
        </div>
    );
};

export default Home;