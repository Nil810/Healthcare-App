import React, { useState } from 'react';

function AddServiceForm({ addService }) {
  const [service, setService] = useState({ name: '', description: '', price: '' });

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (service.name && service.description && service.price) {
      addService(service);
      setService({ name: '', description: '', price: '' });
    } else {
      alert("All fields are required");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name" 
        placeholder="Service Name" 
        value={service.name} 
        onChange={handleChange} 
      />
      <input 
        name="description" 
        placeholder="Description" 
        value={service.description} 
        onChange={handleChange} 
      />
      <input 
        name="price" 
        placeholder="Price" 
        value={service.price} 
        onChange={handleChange} 
      />
      <button type="submit">Add Service</button>
    </form>
  );
}

export default AddServiceForm;
