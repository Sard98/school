import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { IStaticMethods } from 'pipeline/pipeline';

// components
import Carousel from '../../components/Carousel';



const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        window.HSStaticMethods.autoInit(['carousel']);
    }, [location.pathname]);
    return (
        <div className="container mx-auto my-8 flex md:grid md:grid-cols-2 flex-wrap-reverse">
            <div className="flex flex-col mx-8 space-y-8 text-center justify-center items-center">
                <h1 className="text-xl md:text-4xl sm-2xl">Welcome to our website! we are building your dreams togather.</h1>
                <h1>We will monitor your progress and output the best learning style for your situation. </h1>
                <button className="btn shadow hover:shadow-outline px-4 py-1 rounded">Exams</button>
            </div>
            <div className="w-full h-full overflow-hidden">
                <Carousel/>
            </div>
        </div>
    );
}
export default Home;
