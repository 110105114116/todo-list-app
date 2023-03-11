import React from "react";
import TaskForm from '@/componants/TaskForm'
import AllTasks from "@/componants/AllTasks";
import BtnAction from "@/componants/BtnAction";
import Dashboard from "@/componants/Dashboard";

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

const gridStyles = {
  padding: 1,
  height: '100vh',
  borderRight: '1px solid #e0e0e0',
};

const Tasks = () => {
  return (<>

    <Grid container spacing={2}>

      <Grid item xs={12} md={7} lg={4} order={{ xs: 1, lg: 1 }}
        sx={{ ...gridStyles }}
      >
        <TaskForm />
        <BtnAction />
        <AllTasks />
      </Grid>

      <Grid item xs={12} md={7} lg={8} order={{ xs: 2, lg: 2 }}>
        <h1>Dashboard</h1>
        <Dashboard />
      </Grid>

    </Grid>
  </>)
}

export default Tasks
