import React, { useEffect, useState } from 'react';
import { getRestaurants } from '../api';
import { Link } from 'react-router-dom';
import './RestaurantList.css';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRestaurants()
      .then(data => {
        if (Array.isArray(data)) {
          setRestaurants(data);
        } else {
          setError('Failed to fetch restaurants.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch restaurants.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="restaurant-list-container"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="restaurant-list-container"><p>{error}</p></div>;
  }

  return (
    <div className="restaurant-list-container">
      <h2>Restaurants</h2>
      <Link to="/add" className="add-link">Add New Restaurant</Link>
      {restaurants.length > 0 ? (
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <p>{restaurant.location}</p>
              <Link to={`/modify/${restaurant.id}`} className="modify-link">Modify</Link>
              <Link to={`/delete/${restaurant.id}`} className="delete-link">Delete</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No restaurants available.</p>
      )}
    </div>
  );
};

export default RestaurantList;
