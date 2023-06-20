import { useEffect } from "react";
import About from "./about/About";
import Banner from "./banner/Banner";
import Faq from "./faq/Faq";
import Feature from "./feature/Feature";
import Pricing from "./pricing/Pricing";
import Review from "./review/Review";
import Service from "./service/Service";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    return (
        <div>
            <Banner />
            <Service />
            <Feature />
            <Pricing />
            <Review />
            <Faq />
            <About />
        </div>
    );
};

export default Home;