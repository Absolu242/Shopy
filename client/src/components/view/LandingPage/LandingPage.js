import React from 'react'
import Hero from '../Hero/Hero';
import NewArrivals from '../NewArrivals/NewArrivals';
import Ads from '../Ads/Ads';
import BestSales from '../BestSales/BestSales';
import NewsLetter from '../NewsLetter/NewsLetter';


function LandingPage() {
    return (
        <div >
            <Hero/>
            <NewArrivals/>
            <Ads/>
            <BestSales/>
            <NewsLetter/>
        </div>
    )
}

export default LandingPage
