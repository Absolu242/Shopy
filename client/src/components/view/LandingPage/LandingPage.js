import React from 'react'
import Hero from '../Hero/Hero';
import NewArrivals from '../NewArrivals/NewArrivals';
import Ads from '../Ads/Ads';
import BestSales from '../BestSales/BestSales';
import NewsLetter from '../NewsLetter/NewsLetter';
import store from '../../../data/store';


function LandingPage() {
    return (
        <div >
            <Hero/>
            <NewArrivals/>
            {store.kit
            .filter((item,limit) => limit < 1)
            .map (item => (
            <Ads key={item.id} info={item} />
            ))}
            <BestSales/>
            <NewsLetter/>
        </div>
    )
}

export default LandingPage
