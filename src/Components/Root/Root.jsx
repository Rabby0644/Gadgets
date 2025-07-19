import React from 'react';
import Navber from '../NavBer/Navber';
import Footer from '../Footer/Footer';

import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-6xl m-auto'>
            <Navber></Navber>
       <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;