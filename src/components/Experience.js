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
                    <div className="boxes-title">
                        <p class="centered highlight">Wayfair - Senior Software Engineer - Supplier Capabilities Engineering</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-sm">
                        <div>
                            <p class="aligned">Worked on a team to build scalable .NET web services to adjust ship date estimations that customers see on site, by taking into account supplier performance metrics, lead times, and other operational factors.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-md">
                        <div>
                            <p class="aligned">Architected a multi-datacenter, asynchronous, cache eviction pipeline using Kafka streams, to help manage the cached data used to calculate ship date estimations. This feature helps keep ship date estimations up-to-date as fulfillment operations change throughout the day.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-md">
                        <div>
                            <p class="aligned">Architected data pipelines using C#, Google BigQuery, and Kafka Streams, to analyze and gather supplier performance metrics. This data would serve as inputs to other systems which would run various decision trees to adjust supplier lead times, or adjust supplier 2-Day Delivery Guarantee badging on site.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-sm">
                        <div>
                            <p class="aligned">Architected Wayfair Automated Lead Time, a C# application comprised of several algorithms we created with business stakeholders, to automatically adjust supplier lead times based on supplier performance data.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="timeline-line"></div>
                    <p className="timeline-year-text">2016-2018</p>
                    <div className="boxes-title">
                        <p class="centered highlight">Wayfair - Software Engineer - Checkout & Payments</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-sm">                        
                    <p class="aligned">Helped build a PHP Web API to integrate credit card payment processing through the Paymetric Payment Gateway. This API was used for all of the Wayfair lifestyle brand websites, as well as the iOS and Android apps.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-lg">                        
                        <p class="aligned">Led implementation and launch of Apple Pay on mobile web upon its iOS 10 release using Apple Pay JS API. Configured Wayfair’s environment with necessary cryptographic keys and TLS certificates to securely communicate with Apple and Vantiv (payment processing provider) through a PHP API. Also developed the only (at the time) guest checkout solution using Apple Pay to improve customer experience.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-sm">                        
                    <p class="aligned">Built PayPal Reference Transactions feature using PayPal’s REST API, allowing customers to checkout faster without having to leave Wayfair to log into PayPal.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-lg">                        
                    <p class="aligned">Deprecated the PayPal iOS SDK within the Wayfair iOS app, which in the past had caused several issues, an inconsistent customer experience, and was hard to maintain. Released a new PHP API, which processsed PayPal transactions at Wayfair regardless of platform. This single entry point for PayPal transactions created consistency with logging, faster development for new PayPal features, and debugging issues in production.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="timeline-line"></div>
                    <p className="timeline-year-text">2013-2016</p>
                    <div className="boxes-title">
                        <p class="centered highlight">Veracode - Software Engineer</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-md">
                        <p class="aligned">Helped build Software Composition Analysis platform which identifies third-party/open source components in an Enterprise Application, and any known vulnerabilities identified by National Vulnerability Database within them. Backend was built with Java (RESTful APIs) and SQL, while the frontend was built with AngularJS.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-lg">
                        <p class="aligned">Implemented Static Scan Simple Mode feature so users can scan their applications through the platform with less decisions/clicks and a simpler user experience. Introduced and designed AngularJS and REST APIs into this area of the code which was using old practices like DWR and complex client side logic (JS/JSP), to institute an MVC paradigm.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-sm">
                        <p class="aligned">Led development effort to support static analysis scans for Enterprise Applications written in Cobol, ABAP, and VB6.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-sm">
                        <p class="aligned">Improved static analysis scanner scheduling algorithm to distribute jobs more efficiently amongst various servers engines, which led to faster scan times for customers.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-xsm">
                        <p class="aligned">Served as scrum master for the team along with being a developer.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="timeline-line"></div>
                    <p className="timeline-year-text">2012</p>
                    <div className="boxes-title">
                        <p class="centered highlight">Morpho Detection, Inc. - Software Design Intern</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-sm">
                        <p class="aligned">Added new features to StreetLab Mobile GUI: English-Polish translation, change user password, wireless communication between device and desktop.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="boxes-content-xsm">
                        <p class="aligned">Gained experience with SDLC and participated in weekly ECO and Trace Product meetings.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;