import React, { useState, useEffect } from 'react';

const ServicePage = () => {
    const [popularItems, setPopularItems] = useState([]);

    // Simulate fetching popular items from a big data backend
    useEffect(() => {
        // Here you would typically make an API call to fetch data from your backend
        // For simulation purposes, I'm just generating some sample data
        const fetchPopularItems = async () => {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Sample popular items
            const items = [
                { name: 'Pizza', description: 'Delicious cheesy pizza with your favorite toppings.' },
                { name: 'Sushi', description: 'Freshly prepared sushi rolls with a variety of fillings.' },
                { name: 'Burgers', description: 'Juicy burgers served with crispy fries and a side of coleslaw.' }
                // Add more items as needed
            ];

            setPopularItems(items);
        };

        fetchPopularItems();
    }, []);

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#4CAF50' }}>Our Services</h1>
            <div className="service-item" style={{ border: '1px solid #4CAF50', borderRadius: '5px', padding: '15px', marginBottom: '20px', backgroundColor: '#E8F5E9' }}>
                <h2 style={{ color: '#4CAF50' }}>Fast Delivery</h2>
                <p>Get your favorite meals delivered to your doorstep within minutes.</p>
            </div>
            <div className="service-item" style={{ border: '1px solid #4CAF50', borderRadius: '5px', padding: '15px', marginBottom: '20px', backgroundColor: '#E8F5E9' }}>
                <h2 style={{ color: '#4CAF50' }}>Wide Menu Selection</h2>
                <p>Choose from a wide variety of cuisines and dishes to satisfy your cravings.</p>
            </div>
            <div className="service-item" style={{ border: '1px solid #4CAF50', borderRadius: '5px', padding: '15px', marginBottom: '20px', backgroundColor: '#E8F5E9' }}>
                <h2 style={{ color: '#4CAF50' }}>Easy Ordering</h2>
                <p>Ordering food is just a few clicks away with our user-friendly online platform.</p>
            </div>
            <div className="service-item" style={{ border: '1px solid #4CAF50', borderRadius: '5px', padding: '15px', marginBottom: '20px', backgroundColor: '#E8F5E9' }}>
                <h2 style={{ color: '#4CAF50' }}>24/7 Support</h2>
                <p>Our customer support team is available round the clock to assist you with any queries or issues.</p>
            </div>
            <h2 style={{ textAlign: 'center', color: '#FF5722' }}>Popular Items</h2>
            <div className="popular-items" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                {popularItems.map((item, index) => (
                    <div key={index} className="popular-item" style={{ border: '1px solid #FF5722', borderRadius: '5px', padding: '15px', width: '30%', marginBottom: '20px', backgroundColor: '#FFCCBC' }}>
                        <h3 style={{ color: '#FF5722' }}>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicePage;
