import React from 'react';
import { deleteRestaurant } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import './DeleteRestaurant.css';

const DeleteRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();  

  const handleDelete = async () => {
    if (id && !isNaN(parseInt(id))) {
      await deleteRestaurant(parseInt(id));
      navigate('/');  
    } else {
      alert('Invalid restaurant ID.');
      navigate('/');
    }
  };

  return (
    <div className="delete-restaurant-container">
      <h2>Delete Restaurant</h2>
      <p>Are you sure you want to delete this restaurant?</p>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={() => navigate('/')}>No</button> 
    </div>
  );
};

export default DeleteRestaurant;
