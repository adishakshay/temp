import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'; 
import '../../asserts/Services.css';
import corporateEventsImage from '../../asserts/Image/corporate-events.jpg';
import weddingImage from '../../asserts/Image/Indian-Traditions39-Ceremony-506-Christopher-Brock-Photography.jpg';
import birthdayImage from '../../asserts/Image/AdobeStock_238559139_Preview.jpeg';
import christmasImage from '../../asserts/Image/1000_F_144839552_iQ4E1w6GGljQmzs93ibuKfFB7NYgPmyx.jpg';
import diwaliImage from '../../asserts/Image/AdobeStock_167122847.jpeg';
import foodFestImage from '../../asserts/Image/premium_photo-1661310032863-0488bf177c54.avif';
import concertImage from '../../asserts/Image/1000_F_475189548_38v3QhLwUDpKEFPxcvMW8oLPRzHkngUs.jpg';
import exhibitionImage from '../../asserts/Image/1000_F_325441278_I1XK6bPhmvgoOW1WgSLWpufxTo4kQmaY.jpg';
import fashionShowImage from '../../asserts/Image/Italy-Versace-Spring-Summer-2024-10_1695446043975_1695446090662.avif';
import productLaunchImage from '../../asserts/Image/launch-img01.jpg';
import techConferenceImage from '../../asserts/Image/6580cd25f6ccf3ca517d23a2_7 must-have conference room tech tools for hybrid meetings.webp';
import charityGalaImage from '../../asserts/Image/Charity-Gala-2018-11.jpg';

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="services-page-content">
        <h1>Our Services</h1>
        <p>Discover the wide range of services we offer to make your events memorable.</p>
        <div className="service-list">
          <div className="service-item">
            <img src={corporateEventsImage} alt="Corporate Events" className="service-image" />
            <h2>Corporate Events</h2>
            <p>We provide comprehensive planning and management for all your corporate events.</p>
          </div>
          <div className="service-item">
            <img src={weddingImage} alt="Weddings" className="service-image" />
            <h2>Weddings</h2>
            <p>Our wedding services ensure your special day is perfectly orchestrated and memorable.</p>
          </div>
          <div className="service-item">
            <img src={birthdayImage} alt="Birthday" className="service-image" />
            <h2>Birthday Parties</h2>
            <p>Celebrate your birthday with style and flair. We handle everything from planning to execution.</p>
          </div>
          <div className="service-item">
            <img src={christmasImage} alt="Christmas" className="service-image" />
            <h2>Christmas Events</h2>
            <p>Let us help you create a festive and joyous Christmas celebration.</p>
          </div>
          <div className="service-item">
            <img src={diwaliImage} alt="Diwali" className="service-image" />
            <h2>Diwali Celebrations</h2>
            <p>Experience the vibrant and cultural celebration of Diwali with our tailored services.</p>
          </div>
          <div className="service-item">
            <img src={foodFestImage} alt="Food Fest" className="service-image" />
            <h2>Food Festivals</h2>
            <p>Organize a memorable food fest with diverse cuisines and entertainment.</p>
          </div>
          <div className="service-item">
            <img src={concertImage} alt="Concerts" className="service-image" />
            <h2>Concerts</h2>
            <p>From music to performances, we handle every aspect of organizing concerts.</p>
          </div>
          <div className="service-item">
            <img src={exhibitionImage} alt="Exhibitions" className="service-image" />
            <h2>Exhibitions</h2>
            <p>Plan and execute exhibitions showcasing art, culture, or industry innovations.</p>
          </div>
          <div className="service-item">
            <img src={fashionShowImage} alt="Fashion Shows" className="service-image" />
            <h2>Fashion Shows</h2>
            <p>Host glamorous fashion shows with professional planning and execution.</p>
          </div>
          <div className="service-item">
            <img src={productLaunchImage} alt="Product Launches" className="service-image" />
            <h2>Product Launches</h2>
            <p>Make your product launch a success with our expert planning and coordination.</p>
          </div>
          <div className="service-item">
            <img src={techConferenceImage} alt="Tech Conferences" className="service-image" />
            <h2>Tech Conferences</h2>
            <p>Organize impactful tech conferences that bring together industry leaders and innovators.</p>
          </div>
          <div className="service-item">
            <img src={charityGalaImage} alt="Charity Galas" className="service-image" />
            <h2>Charity Galas</h2>
            <p>Plan and host charity galas that raise funds and awareness for important causes.</p>
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default Services;
