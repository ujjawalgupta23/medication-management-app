import React from "react";

const MedicationSchedule = ({ medications }) => {
  if (medications.length === 0) {
    return <p>No medications added to the schedule.</p>;
  } else {
    return (
      <div>
        <h2>Medication Schedule:</h2>
        <ul>
          {medications.map((medication, index) => (
            <li key={index}>
              {medication.name}: {medication.dosage} - {medication.frequency} times a day at {medication.time}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default MedicationSchedule;
