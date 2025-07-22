import React from 'react';
import Banner from '../Banner/Banner';
import ProductsGadgets from '../PoroductGadgets/ProductsGadgets';
import { Helmet } from 'react-helmet-async';

const Home = () => {









    return (
        <div>
<Helmet>
    <title>Gadget | Home</title>
</Helmet>

        <Banner></Banner>
        <ProductsGadgets></ProductsGadgets>
        </div>
    );
};

export default Home;