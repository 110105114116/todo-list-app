import { Button } from "@mui/material";
import { 
  useClearAllTasksMutation,
  useClearAllCompleteMutation
} from "@/service/tasks";

const BtnAction = () => {

  const [clearAllTasks] = useClearAllTasksMutation({});
  const [clearAllComplete] = useClearAllCompleteMutation({});

  const handleClearAllTasks = () => {
    clearAllTasks({});
  };

  const handleClearAllComplete = () => {
    clearAllComplete({});
  };

  return (<>
    <Button
      variant="contained"
      color="warning"
      style={{ margin: 10 }}
      onClick={handleClearAllComplete}
    >
      Clear complete
    </Button>

    <Button
      variant="contained"
      color="error"
      style={{ margin: 10 }}
      onClick={handleClearAllTasks}
    >
      Clear all
    </Button>
  </>);
};

export default BtnAction;