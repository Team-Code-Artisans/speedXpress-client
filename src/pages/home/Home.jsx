
import About from "./about/About";
import Banner from "./banner/Banner";
import Faq from "./faq/Faq";
import Feature from "./feature/Feature";
import Pricing from "./pricing/Pricing";
import Review from "./review/Review";
import Service from "./service/Service";
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'

const Home = () => {
    
    return (
        <div>
          
            <Banner />
            <Service />
            <Section1 />
            <Feature />
            <Section2 />
            <Pricing />
            <Review />
            <Faq />
            <About />
        </div>
    );
};

export default Home;