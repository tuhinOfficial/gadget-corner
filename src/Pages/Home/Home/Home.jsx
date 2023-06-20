import React from 'react';
import Banner from '../Banner/Banner';
import Popular from '../popular/popular/Popular';
import Offered from '../Offered/Offered';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Popular></Popular>
            <Offered></Offered>
        </section>
    );
};

export default Home;