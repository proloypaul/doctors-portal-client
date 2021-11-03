import React from 'react';
import Apponitment from '../Apponitment/Apponitment';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Apponitment></Apponitment>
        </div>
    );
};

export default Home;