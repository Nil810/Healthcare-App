import React, { useState } from 'react';

function Service({ service, updateService, deleteService }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedService, setUpdatedService] = useState(service);

  const handleChange = (e) => {
    setUpdatedService({ ...updatedService, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateService(service.id, updatedService);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input name="name" value={updatedService.name} onChange={handleChange} />
          <input name="description" value={updatedService.description} onChange={handleChange} />
          <input name="price" value={updatedService.price} onChange={handleChange} />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <strong>{service.name}</strong> - {service.description} - ${service.price}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteService(service.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default Service;
