import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Navbar from '../../Components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';






function HomePage() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const isAuthenticated = Boolean(localStorage.getItem('user'));
    const isAdmin = Boolean(localStorage.getItem('role'));
    const location = useLocation();

    return (
        <>
            <header className="header">
                <Navbar/>
                <div className="section__container header__container" id="home">
                    <div className="header__content">
                        <h1>We Are Qualified & Professional</h1>
                    </div>
                </div>
            </header>
            <section className="banner__container">
                <div className="banner__card">
                    <h4>Satisfaction Guaranteed or Your Dent Back.</h4>
                </div>
                <div className="banner__card">
                    <h4>Caring For Your Car The Way You Would.</h4>
                </div>
                <div className="banner__image">
                    <img src="https://github.com/A-SathishKumar/vehicle-car-platform-frontend/blob/main/src/assets/banner.jpg" alt="banner" />
                </div>
            </section>

            <section className="section__container experience__container" id="about">
                <div className="experience__image">
                    <img src="src\assets\experience.jpg" alt="experience" />
                </div>
                <div className="experience__content">
                    <p className="section__subheader">WHO WE ARE</p>
                    <h2 className="section__header">
                        We Have 25 Years Of Experience In This Field
                    </h2>
                    <p className="section__description">
                        With a rich legacy spanning 25 years, our commitment to excellence in
                        car servicing is unwavering. Our seasoned team brings a wealth of
                        experience to ensure your vehicle receives top-notch care. Trust in
                        our expertise to keep your car running smoothly and safely.
                    </p>
                </div>
            </section>

            <section className="service" id="service">
                <div className="section__container service__container">
                    <p className="section__subheader">WHY CHOOSE US</p>
                    <h2 className="section__header">Great Car Service</h2>
                    <p className="section__description">
                        Trust us to keep your automobile running smoothly and reliably.
                    </p>
                    <div className="service__grid">
                        <div className="service__card">
                            <img src="src\assets\service-1.jpg" alt="service" />
                            <h4>Aligned Wheel</h4>
                            <p>
                                Experience smoother rides and extended tire life with our wheel
                                alignment service.
                            </p>
                        </div>
                        <div className="service__card">
                            <img src="src\assets\service-2.jpg" alt="service" />
                            <h4>Electrical system</h4>
                            <p>
                                Elevate car's electrical system to peak performance with our
                                specialized expertise.
                            </p>
                        </div>
                        <div className="service__card">
                            <img src="src\assets\service-3.jpg" alt="service" />
                            <h4>System Service</h4>
                            <p>
                                We utilize cutting-edge diagnostics and techniques to ensure
                                optimal condition.
                            </p>
                        </div>
                        <div className="service__card">
                            <img src="src\assets\service-4.jpg" alt="service" />
                            <h4>Engine Diagnostics</h4>
                            <p>
                                Unlock the secrets of your car's performance with state-of-the-art
                                diagnostic services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="customisation">
                <div className="section__container customisation__container">
                    <p className="section__subheader">OUR CUSTOMISATION</p>
                    <h2 className="section__header">
                        Car Serving Matched with Great Workmanship
                    </h2>
                    <p className="section__description">
                        Our dedicated team of skilled technicians and mechanics takes pride in
                        delivering top-tier servicing for your beloved vehicle.
                    </p>
                    <div className="customisation__grid">
                        <div className="customisation__card">
                            <h4>65</h4>
                            <p>Total Projects</p>
                        </div>
                        <div className="customisation__card">
                            <h4>165</h4>
                            <p>Transparency</p>
                        </div>
                        <div className="customisation__card">
                            <h4>463</h4>
                            <p>Done Projects</p>
                        </div>
                        <div className="customisation__card">
                            <h4>5063</h4>
                            <p>Got Awards</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section__container testimonial__container" id="client">
                <p className="section__subheader">CLIENT TESTIMONIALS</p>
                <h2 className="section__header">100% Approved By Customers</h2>
                <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="swiper"
                >
                    <SwiperSlide>
                        <div className="testimonial__card">
                            <img src="src/assets/testimonial-3.jpg" alt="testimonial" />
                            <p>
                                I couldn't believe my eyes when I got my car back from the
                                service. It looked and drove like it had just rolled off the
                                assembly line. The team did an incredible job, and I'm a
                                customer for life!
                            </p>
                            <h4>- Sarah T.</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial__card">
                            <img src="src/assets/testimonial-1.jpg" alt="testimonial" />
                            <p>
                                I've been bringing my car here for years, and they never
                                disappoint. Their attention to detail and commitment to quality
                                service is unmatched. My car always feels brand new after a
                                visit.
                            </p>
                            <h4>- John P.</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial__card">
                            <img src="src/assets/testimonial-2.jpg" alt="testimonial" />
                            <p>
                                As a car enthusiast, I'm extremely particular about who touches
                                my prized possession. Their team's expertise and passion for
                                cars truly shine through in their work. My car has never looked
                                better.
                            </p>
                            <h4>- David S.</h4>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                </Swiper>
            </section>
            <section className="contact">
                <div className="section__container contact__container">
                    <div className="contact__content">
                        <p className="section__subheader">CONTACT US</p>
                        <h2 className="section__header">Imagine Your Car Feeling New Again</h2>
                        <p className="section__description">
                            Experience the magic of a rejuvenated ride as we pamper your car
                            with precision care, leaving it feeling as good as new.
                        </p>
                        <div className="contact__btns">
                            <button className="btn">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="footer">
                <div className="section__container subscribe__container">
                    <div className="subscribe__content">
                        <p className="section__subheader">OUR NEWSLETTER</p>
                        <h2 className="section__header">Subscribe To Our Newsletter</h2>
                        <p className="section__description">
                            Subscribe to our newsletter and receive exclusive content, expert
                            insights, and special offers delivered directly to your inbox.
                        </p>
                    </div>
                    <div className="subscribe__form">
                        <form action="/">
                            <input type="text" placeholder="Your Email" />
                            <button className="btn">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="section__container footer__container">
                    <div className="footer__col">
                        <div className="logo footer__logo">
                            <a href="#"><img src="src/assets/logo.png" alt="logo" /></a>
                        </div>
                        <p className="section__description">
                            With a rich legacy spanning 25 years, our commitment to excellence
                            in car servicing is unwavering.
                        </p>
                        <ul className="footer__socials">
                            <li>
                                <a href="#"><i className="ri-facebook-fill"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="ri-google-fill"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="ri-instagram-line"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="ri-youtube-line"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h4>Our Services</h4>
                        <ul className="footer__links">
                            <li><a href="#">Skilled Mechanics</a></li>
                            <li><a href="#">Routine Maintenance</a></li>
                            <li><a href="#">Customized Solutions</a></li>
                            <li><a href="#">Competitive Pricing</a></li>
                            <li><a href="#">Satisfaction Guaranteed</a></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h4>Contact Info</h4>
                        <ul className="footer__links">
                            <li>
                                <p>
                                    Experience the magic of a rejuvenated ride as we pamper your car
                                    with precision care
                                </p>
                            </li>
                            <li>
                                <p>Phone: <span>+91 99999 99999</span></p>
                            </li>
                            <li>
                                <p>Email: <span>info@vehiclecare.com</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="footer__bar">
                Copyright © 2023. All rights reserved.
            </div>

        </>
    )
}

export default HomePage

