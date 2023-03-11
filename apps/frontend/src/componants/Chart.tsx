import React, { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { useGetTaskQuery } from '@/service/tasks';

ChartJS.register(ArcElement, Tooltip, Legend);

import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Donut = () => {

  const { data: tasks } = useGetTaskQuery({})
  const completed = tasks?.filter((task: any) => task.status === 'completed').length;
  const inCompleted = tasks?.filter((task: any) => task.status === 'incompleted').length;

  const donutData = useMemo(() => {
    
    return {
      labels: ['Completed', 'Incompleted'],
      datasets: [
        {
          label: 'Tasks',
          data: [completed, inCompleted],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1,
        },
      ],
    }
  }, [tasks])

  return (<>
      <Grid container spacing={2}>

        <Grid item xs={12} md={6} lg={3} order={{ xs: 1, lg: 1 }}>
          <Item>
            Completed <hr />
            <h1>{completed}</h1>
          </Item>
        </Grid> 

        <Grid item xs={12} md={6} lg={3} order={{ xs: 2, lg: 3 }}>
          <Item>
            In-complete <hr />
            <h1>{inCompleted}</h1>
          </Item>
        </Grid>

        <Grid item xs={12} md={7} lg={6} order={{ xs: 3, lg: 2 }}>
          <Item>
            <Doughnut data={donutData} />
          </Item>
        </Grid>

      </Grid>
  </>)
}

export default Donut