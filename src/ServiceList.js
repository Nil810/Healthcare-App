import React from 'react';
import Service from './Service';

function ServiceList({ services, updateService, deleteService }) {
  return (
    <div>
      <h2>Available Services</h2>
      <ul>
        {services.map((service) => (
          <Service 
            key={service.id} 
            service={service} 
            updateService={updateService} 
            deleteService={deleteService} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
