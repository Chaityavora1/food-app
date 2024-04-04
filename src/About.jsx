import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h2 style={{ color: '#ff4500', textAlign: 'center', marginBottom: '20px' }}>About Us</h2>
      <p>Welcome to our food delivery service! We are dedicated to providing delicious meals delivered straight to your door.</p>
      <p>Our mission is to make ordering food convenient, easy, and enjoyable for our customers. Whether you're craving pizza, burgers, salads, or something sweet, we've got you covered.</p>
      <p>At our food delivery service, we prioritize quality, freshness, and customer satisfaction. All of our meals are prepared with care by talented chefs using the finest ingredients.</p>
      <p>Ordering from us is simple. Just browse our menu, select your favorite items, and place your order online. Sit back, relax, and let us handle the rest. Your delicious meal will be delivered to your doorstep in no time.</p>
      <p>Thank you for choosing us for your food delivery needs. We look forward to serving you!</p>

      <main className="about-page">
        <h2 style={{ color: '#ff4500', textAlign: 'center', marginBottom: '20px' }}>About Food Delivery</h2>
        <section className="about-mission" style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#ff4500' }}>Our Mission</h3>
          <p>We are a passionate team dedicated to delivering delicious food to your doorstep. We partner with the best restaurants in town to offer a wide variety of cuisines to satisfy any craving.</p>
        </section>
        <section className="about-values" style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#ff4500' }}>Our Values</h3>
          <ul>
            <li>Quality: We source fresh and high-quality ingredients from our partner restaurants</li>
            <li>Convenience: We provide a user-friendly platform for ordering your favorite meals</li>
            <li>Speed & Reliability: We strive for fast and reliable delivery service</li>
            <li>Customer Satisfaction: Your satisfaction is our top priority</li>
          </ul>      
        </section>
        <section className="about-team">
          <h3 style={{ color: '#ff4500' }}>The Food Delivery Team</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8dh9r6tHHufGndRV-x683qjA9MNt_os4HkFaZH3jG8w&s" alt="Food Delivery Team" style={{ width: '100%', maxWidth: '400px', height: 'auto', marginBottom: '10px' }} />
          <p>We're a team of passionate individuals who love good food and technology. We're dedicated to making your food delivery experience enjoyable and convenient.</p>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
