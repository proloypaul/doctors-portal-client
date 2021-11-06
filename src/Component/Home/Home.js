import React from 'react';
import Apponitment from '../Apponitment/Apponitment';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Health from '../HealthCare/Health';
import ContactUs from '../Login/ContactUs/ContactUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Health></Health>
            <Apponitment></Apponitment>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;