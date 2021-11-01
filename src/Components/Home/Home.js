import React from 'react';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WhyParcelDelivery from '../WhyParcelDelivery/WhyParcelDelivery';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <WhyParcelDelivery />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;