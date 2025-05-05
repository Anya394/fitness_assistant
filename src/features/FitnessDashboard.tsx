import React, { useState } from 'react';
import WeightProgressChart from '@/entities/WeightProgressChart';

const FitnessDashboard: React.FC = () => {
  const [weightData, setWeightData] = useState([
    { date: new Date(2025, 3, 1), weight: 75.5 },
    { date: new Date(2025, 3, 5), weight: 74.8 },
    { date: new Date(2025, 3, 10), weight: 74.2 },
    { date: new Date(2025, 3, 15), weight: 73.9 },
    { date: new Date(2025, 3, 20), weight: 73.5 },
    { date: new Date(2025, 3, 25), weight: 73.0 },
    { date: new Date(2025, 3, 30), weight: 72.7 },
  ]);

  const theme = {
    primary: '#4C72B0', // Синий
    secondary: '#DD8452', // Оранжевый
    background: '#f9f9f9',
    text: '#333',
    grid: '#e0e0e0',
    tooltipBg: 'rgba(255, 255, 255, 0.9)',
  };

  const [newWeight, setNewWeight] = useState('');

  const handleAddWeight = () => {
    if (!newWeight) return;
    
    setWeightData([
      ...weightData,
      {
        date: new Date(),
        weight: parseFloat(newWeight),
      },
    ]);
    setNewWeight('');
  };

  return (
    <div className="fitness-dashboard">
      <h1>Прогресс взвешиваний</h1>
      <div className="chart-container">
        <WeightProgressChart data={weightData} />
      </div>
      
      <div className="weight-input">
        <input
          type="number"
          value={newWeight}
          onChange={(e) => setNewWeight(e.target.value)}
          placeholder="Введите текущий вес (кг)"
          step="0.1"
        />
        <button onClick={handleAddWeight}>Добавить</button>
      </div>
      
      <style jsx>{`
  .chart-container {
    margin: 20px 0;
    border: 1px solid #eaeaea;
    border-radius: 12px;
    padding: 16px;
    background: white;
    transition: box-shadow 0.3s ease;
  }

  .chart-container:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  }

  .weight-input {
    display: flex;
    gap: 12px;
    margin-top: 24px;
    align-items: center;
  }

  .weight-input input {
    padding: 10px 16px;
    border: 1px solid #ddd;
    border-radius: 6px;
    flex-grow: 1;
    font-size: 16px;
    transition: border 0.3s ease;
  }

  .weight-input input:focus {
    outline: none;
    border-color: ${theme.primary};
    box-shadow: 0 0 0 2px rgba(76, 114, 176, 0.2);
  }

  .weight-input button {
    padding: 10px 20px;
    background-color: ${theme.primary};
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .weight-input button:hover {
    background-color: ${theme.secondary};
    transform: translateY(-1px);
  }
`}</style>
    </div>
  );
};

export default FitnessDashboard;