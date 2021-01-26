import React from 'react';
import "./Home.css";
import Product from "./Product.js";

function Home() {
    return (
        <div classNme="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

                <div className="home__row">
                    <Product 
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" 
                        price={320} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" 
                    />
                    <Product 
                        title="Hooked: How to Build Habit-Forming Products" 
                        price={447} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51DlnjccG-L._SX322_BO1,204,203,200_.jpg" 
                    />
                </div>
                <div className="home__row">
                    <Product 
                        title="Can't Hurt Me: Master Your Mind and Defy the Odds" 
                        price={720} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/410MI8gKwzL._SX331_BO1,204,203,200_.jpg"
                    />
                    <Product 
                        title="Atomic Habits: The life-changing million copy bestseller" 
                        price={400} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
                    />
                    <Product 
                        title="To Sell is Human: The Surprising Truth About Persuading, Convincing, and Influencing Others" 
                        price={260} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51xM8OfmPGL._SX324_BO1,204,203,200_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        title="Seagate Expansion 1.5 TB External HDD - USB 3.0 for PC Laptop, 3 yr Data Recovery Services, Portable Hard Drive (STEA1500400)" 
                        price={4300} 
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71p2W9Ykh7L._AC_AA180_.jpg"
                    />
                </div>


            </div>
        </div>
    );
}

export default Home
