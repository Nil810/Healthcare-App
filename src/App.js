import React, { useState } from 'react';
import ServiceList from './ServiceList';
import AddServiceForm from './AddServiceForm';

function App() {
  const [services, setServices] = useState([
    { id: 1, name: "Dental Checkup", description: "Routine dental checkup", price: 50 },
    { id: 2, name: "Blood Test", description: "Complete blood count", price: 30 },
  ]);

  const addService = (newService) => {
    setServices([...services, { ...newService, id: services.length + 1 }]);
  };

  const updateService = (id, updatedService) => {
    setServices(services.map(service => service.id === id ? updatedService : service));
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="App">
      <h1>Healthcare Services</h1>
      <AddServiceForm addService={addService} />
      <ServiceList 
        services={services} 
        updateService={updateService} 
        deleteService={deleteService} 
      />
    </div>
  );
}

export default App;