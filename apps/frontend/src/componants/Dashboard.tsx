import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

import Donut from '@/componants/Chart'

const Dashboard = () => {

  return (<>
    <div 
      className="chart-container" 
      style={{
        position: 'relative',
        width:'100%'
      }}
    >
      <Donut />
    </div>
  </>)
}

export default Dashboard