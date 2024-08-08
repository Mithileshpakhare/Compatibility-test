const restaurants = [
    {
      id: 1,
      name: "Test",
      description: "Restaurant Test",
      location: "Test location"
    },

  ];
  
  export const getRestaurants = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(restaurants), 1000);
    });
  };
  
  export const addRestaurant = (restaurant) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        restaurants.push({ ...restaurant, id: restaurants.length + 1 });
        resolve(restaurant);
      }, 1000);
    });
  };
  
  export const modifyRestaurant = (id, updatedDetails) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = restaurants.findIndex((rest) => rest.id === id);
        restaurants[index] = { ...restaurants[index], ...updatedDetails };
        resolve(restaurants[index]);
      }, 1000);
    });
  };
  
  export const deleteRestaurant = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = restaurants.findIndex((rest) => rest.id === id);
        restaurants.splice(index, 1);
        resolve();
      }, 1000);
    });
  };
  