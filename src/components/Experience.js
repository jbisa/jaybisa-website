import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Boxes.css'

const Experience = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <section id="#experience" className="container py-5 section">
            <h1 className="header" data-aos="fade-up">Experience</h1>
            <div className="grids">
                <div data-aos="fade-right">
                    <p className="timeline-year-text">2018-Present Day</p>
                    <div className="boxes">
                        <p>Wayfair</p>
                        <p>Senior Software Engineer - Supplier Capabilities Engineering</p>
                        <p>- Worked on a team to build scalable .NET web services to adjust ship date estimations that customers see on site, by taking into account supplier performance metrics, lead times, and other operational factors.</p>
                        <p>- Architected a multi-datacenter, asynchronous, cache eviction pipeline using Kafka streams, to help manage the cached data used to calculate ship date estimations. This feature helps keep ship date estimations up-to-date as fulfillment operations change throughout the day.</p>
                        <p>- Architected data pipelines using C#, Google BigQuery, and Kafka Streams, to analyze and gather supplier performance metrics. This data would serve as inputs to other systems which would run various decision trees to adjust supplier lead times, or adjust supplier 2-Day Delivery Guarantee badging on site.</p>
                        <p>- Architected Wayfair Automated Lead Time, a C# application comprised of several algorithms we created with business stakeholders, to automatically adjust supplier lead times based on supplier performance data.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="timeline-line"></div>
                    <p className="timeline-year-text">2016-2018</p>
                    <div className="boxes">
                        <p>Wayfair</p>
                        <p>Software Engineer - Checkout & Payments</p>
                        <p>- Helped build a PHP Web API to integrate credit card payment processing through the Paymetric Payment Gateway. This API was used for all of the Wayfair lifestyle brand websites, as well as the iOS and Android apps.</p>
                        <p>- Implemented and launched Apple Pay on mobile web upon its iOS 10 release using Apple Pay JS API. Configured Wayfair’s environment with necessary cryptographic keys and TLS certificates to securely communicate with Apple and Vantiv (payment processing provider). Developed a guest checkout solution on the backend to improve UX for customers (currently Apple Pay is the only guest checkout option available on Wayfair).</p>
                        <p>- Built PayPal Reference Transactions feature using PayPal’s REST API, allowing customers to checkout faster without having to leave Wayfair to log into PayPal.</p>
                        <p>- Released server side PayPal support for Wayfair iOS app, to migrate it from the PayPal iOS SDK to the desktop and mobile web workflow. This consistency between platforms allows for faster development of new PayPal features and debugging issues in production.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="timeline-line"></div>
                    <p className="timeline-year-text">2013-2016</p>
                    <div className="boxes">Veracode</div>
                </div>
                <div data-aos="fade-right">
                    <div className="timeline-line"></div>
                    <p className="timeline-year-text">2012</p>
                    <div className="boxes">Morpho Detection, Inc</div>
                </div>
            </div>
        </section>
    );
}

export default Experience;