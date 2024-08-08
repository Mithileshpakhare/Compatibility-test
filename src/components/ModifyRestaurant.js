import React, { useState, useEffect } from 'react';
import { modifyRestaurant, getRestaurants } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const ModifyRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    getRestaurants().then((data) => {
      const restaurant = data.find((rest) => rest.id === parseInt(id));
      if (restaurant) {
        setName(restaurant.name);
        setDescription(restaurant.description);
        setLocation(restaurant.location);
      }
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await modifyRestaurant(parseInt(id), { name, description, location });
    navigate('/');
  };

  return (
    <div>
      <h2>Modify Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <button type="submit">Modify</button>
      </form>
    </div>
  );
};

export default ModifyRestaurant;
