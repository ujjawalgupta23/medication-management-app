import React, { useState } from "react";
import MedicationForm from "./components/MedicationForm";
import MedicationSchedule from "./components/MedicationSchedule";
import './App.css'

function App() {
  const [medications, setMedications] = useState([]);

  const handleAddMedication = (medication) => {
    setMedications((prevMedications) => [...prevMedications, medication]);
  };

  return (
    <div className="App">
      <h1>Medication Management App</h1>
      <MedicationForm onAddMedication={handleAddMedication} />
      <MedicationSchedule medications={medications} />
    </div>
  );
}

export default App;
