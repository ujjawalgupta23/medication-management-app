import React, { useState } from "react";

const MedicationForm = ({ onAddMedication }) => {
  const [medicationName, setMedicationName] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [time, setTime] = useState("");

  const handleAddMedication = () => {
    if (medicationName && dosage && frequency && time) {
      const newMedication = {
        name: medicationName,
        dosage,
        frequency,
        time,
      };
      onAddMedication(newMedication);
      setMedicationName("");
      setDosage("");
      setFrequency("");
      setTime("");
    }
  };

  return (
    <div className="form">
      <h2>Add Medication:</h2>
      <input
        type="text"
        placeholder="Medication Name"
        value={medicationName}
        onChange={(e) => setMedicationName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dosage"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Frequency"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      />
      <input
        type="text"
        placeholder="Time (e.g., 8:00 AM)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleAddMedication}>Add Medication</button>
    </div>
  );
};

export default MedicationForm;
