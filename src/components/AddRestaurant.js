import React, { useState } from 'react';
import { addRestaurant } from '../api';
import { useNavigate } from 'react-router-dom';
import './AddRestaurant.css';

const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();  

  const validate = () => {
    let errors = {};
    if (!name.trim()) errors.name = "Name is required.";
    if (!description.trim()) errors.description = "Description is required.";
    if (!location.trim()) errors.location = "Location is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      await addRestaurant({ name, description, location });
      navigate('/'); 
    }
  };

  return (
    <div className="container">
      <h2>Add Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          {errors.location && <p className="error">{errors.location}</p>}
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddRestaurant;
