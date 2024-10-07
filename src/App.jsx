import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import './App.css'; // Main CSS
import one from './images/one.webp'

const HomePage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Mock fetching data (replace with real API call)
    const mockListings = [
      {
        image: 'C:/Users/Mudassir/Desktop/New folder (2)/semester 5/web dev/airbnb/Airbnb/src/images/one.webp',
        title: 'Stay in Prince\'s Purple Rain house',
        type: 'Entire home',
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        price: 77,
        rating: 4.8
      },
      // Add more listings here
    ];

    setListings(mockListings);
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <SearchBar />
      <Categories />
      <div className="listing-section">
        {listings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
