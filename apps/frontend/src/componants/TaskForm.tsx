
import { useAddTaskMutation } from "@/service/tasks"
import { Button, TextField } from "@mui/material"

const TaskForm = () => {

  const [addTask] = useAddTaskMutation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      title: { value: string }
    }
    const title = target.title.value
    addTask({ title })

    target.title.value = ''
  }

  return (<>
    <form onSubmit={handleSubmit}>
      <TextField fullWidth label="New task" name="title" required />
      <Button variant="outlined" type="submit" style={{ margin: 10 }}>+ Add task</Button>
    </form><hr />
  </>)
}

export default TaskForm