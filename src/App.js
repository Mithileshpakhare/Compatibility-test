import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRestaurant from './components/AddRestaurant';
import ModifyRestaurant from './components/ModifyRestaurant';
import DeleteRestaurant from './components/DeleteRestaurant';
import RestaurantList from './components/RestaurantList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>FOODIEDELIGHT</h1>
        <Routes>
          <Route path="/add" element={<AddRestaurant />} />
          <Route path="/modify/:id" element={<ModifyRestaurant />} />
          <Route path="/delete/:id" element={<DeleteRestaurant />} />
          <Route path="/" element={<RestaurantList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
