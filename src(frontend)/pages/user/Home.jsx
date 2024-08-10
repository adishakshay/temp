import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css/animate.min.css';
import Typing from 'react-typing-effect';
import '../../asserts/Home.css';
import Footer from "../../components/Footer";
// import { Helmet } from 'react-helmet';
import Navbar from "../../components/Navbar";
import img1 from '../../asserts/Image/chuttersnap-Q_KdjKxntH8-unsplash.jpg';
import img2 from '../../asserts/Image/evangeline-shaw-ysbTWw4hrG4-unsplash.jpg';
import img3 from '../../asserts/Image/pexels-matheusnatan-2976970.jpg';
import img4 from '../../asserts/Image/enchanting-hindu-ceremony-at-the-marriott-in-schaumburg-illinois_1498414-scaled.avif';
import img5 from '../../asserts/Image/raj-rana--7arhYAUEOg-unsplash.jpg';
import img6 from '../../asserts/Image/candid-telugu-wedding-photographer-amarramesh-208.jpg';
import img7 from '../../asserts/Image/smartworks-coworking-cW4lLTavU80-unsplash.jpg';
import img8 from '../../asserts/Image/1000_F_91038333_C6b2EeBuxMcVjJpvdtdG2dMZijoSUkDX.jpg';
import img9 from '../../asserts/Image/072922_Blog_70thBirthdayPartyIdeas_01-hero.png';
import img10 from '../../asserts/Image/Toddler-Birthday-Party-Dos-and-Donts-722x406.jpg';
import img11 from '../../asserts/Image/gettyimages-1183414292-1-_slide-30784f99ac10f059c242d37e91d05ead475854f4.webp';
import img12 from '../../asserts/Image/ecofy-high-resolution-logo.png';


// Define your slides
const cardSlides = [
    [img1, img2, img3,
    img4, img5, img6,
    img7, img8, img9,
    img10, img11, img12],
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
};

const Home = () => {
    const [projectCount, setProjectCount] = useState(0);
    const [clientCount, setClientCount] = useState(0);
    const [eventCount, setEventCount] = useState(0);
    const [exhibitionCount, setExhibitionCount] = useState(0);
    const [activationCount, setActivationCount] = useState(0);

    const statsRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    const counters = [
                        { count: 7000, setter: setProjectCount },
                        { count: 200, setter: setClientCount },
                        { count: 2000, setter: setEventCount },
                        { count: 4000, setter: setExhibitionCount },
                        { count: 1000, setter: setActivationCount }
                    ];

                    counters.forEach(({ count, setter }) => {
                        let start = 0;
                        const increment = count / 100;
                        const updateCount = setInterval(() => {
                            start += increment;
                            if (start >= count) {
                                clearInterval(updateCount);
                                setter(count);
                            } else {
                                setter(Math.ceil(start));
                            }
                        }, 20);
                    });

                    setHasAnimated(true);
                }
            });
        }, { threshold: 0.1 });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div>
            {/* <Helmet>
                <title>EcoFy</title>
            </Helmet> */}
            <Navbar />
            <div className="home-body">
                <div className="home-hero-section">
                    <div className="home-hero-content">
                        <h1 className="animate__animated animate__fadeInDown">Innovative, Sustainable Event Solutions</h1>
                        <h2 className="animate__animated animate__fadeInUp">
                            Crafted for <span className="home-highlight">
                            <Typing 
                                text={["Industries", "Corporates", "Conferences", "Occasions"]}
                                speed={250}
                                eraseSpeed={50}
                                typingDelay={500}
                                eraseDelay={1000}
                                cursorRenderer={cursor => <span className="home-highlight">{cursor}</span>}
                            />
                            </span>
                        </h2>
                        <h3 className="home-slogan animate__animated animate__fadeIn">Celebrate with Nature</h3>
                    </div>
                </div>
                <div className="home-carousel-section">
                    {cardSlides.map((slides, index) => (
                        <div key={index} className="home-carousel-card">
                            <Slider {...settings}>
                                {slides.map((slide, slideIndex) => (
                                    <img src={slide} alt={`Card ${index + 1} Slide ${slideIndex + 1}`} key={slideIndex} />
                                ))}
                            </Slider>
                        </div>
                    ))}
                </div>
                <div className="home-stats-section" ref={statsRef}>
                    <h2>SUCCESSFULLY COMPLETED 7000+ PROJECTS</h2>
                    <div className="home-stats-container">
                        <div className="home-stat">
                            <div className={`home-counter ${hasAnimated ? 'visible' : ''}`}>{clientCount}+</div>
                            <div>CORPORATE CLIENTS</div>
                        </div>
                        <div className="home-stat">
                            <div className={`home-counter ${hasAnimated ? 'visible' : ''}`}>{eventCount}+</div>
                            <div>EVENTS</div>
                        </div>
                        <div className="home-stat">
                            <div className={`home-counter ${hasAnimated ? 'visible' : ''}`}>{exhibitionCount}+</div>
                            <div>EXHIBITIONS</div>
                        </div>
                        <div className="home-stat">
                            <div className={`home-counter ${hasAnimated ? 'visible' : ''}`}>{activationCount}+</div>
                            <div>ACTIVATIONS</div>
                        </div>
                    </div>
                </div>
                <div className="home-info-section">
                    <h2 className="animate__animated animate__fadeInLeft">Seamless, Eco-Friendly</h2>
                    <h1 className="animate__animated animate__fadeInRight">Event Management</h1>
                    <p className="animate__animated animate__fadeInUp">
                        Welcome to EcoFy, where we blend innovation with sustainability to create unforgettable events. 
                        Our team of experts is committed to providing comprehensive event management services that are both 
                        seamless and environmentally friendly. We handle everything from initial planning to final execution, 
                        ensuring that your event is a resounding success without compromising on sustainability.
                        At EcoFy, customization is at the heart of what we do. We partner with top vendors who share our vision of 
                        eco-friendly practices, managing all the details including scheduling, logistics, and day-of coordination, 
                        so you can focus on what truly matters. Experience the future of event management with EcoFy.
                    </p>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
