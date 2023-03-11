import React from 'react'
import { 
  useGetTaskQuery, 
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from "@/service/tasks"

import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AllTasks() {
  const { data } = useGetTaskQuery({})

  const [updateTask] = useUpdateTaskMutation({})
  const [deleteTask] = useDeleteTaskMutation({})

  return (
    <div>
      <h3>
        Tasks <span style={{ color: 'lightgray' }}>({data && data.length})</span>
      </h3>
      {data && data.map((task: any) => (
        <div 
          key={task.id} 
          style={{
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div
            key={task.id} 
            style={{ 
              cursor: 'pointer',
              backgroundColor: task.status === 'completed' 
                ? '#DBFFD6' 
                : '#FBFBFB',
              transition: 'background-color 0.5s ease',
              width: '80%',
              textAlign: 'left',
              padding: '10px',
              borderRadius: '2px'
            }}
            onClick={() => updateTask(task.id)}
          >
            {
              task.status === 'completed' 
                ? <del>{task.title}</del> 
                : task.title
            }
          </div>

          <div style={{ width: '20%' }}>
            <Button>
              <DeleteIcon 
                style={{ color: '#FF9AA2' }} 
                fontSize="small"
                onClick={() => deleteTask(task.id)}
              />
            </Button>
          </div>
          
        </div>
      ))}
    </div>
  )
}
