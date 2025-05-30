import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";
import axios from "axios";
import { purple, green } from "@mui/material/colors";
import { notify } from "../helper/sweetAlert";

interface ITodoListItem {
  todo: Todotype;
  getTodos: GetFn;
}

const TodoListItem: FC<ITodoListItem> = ({ todo, getTodos }) => {
 
  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/${id}`);
      notify("The todo was deleted successfully!", "success");
    } catch (error) {
      console.log(error);
      notify("The todo was not deleted successfully!", "error");
    } finally {
      getTodos();
    }
  };

  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}/${todo.id}`, {
        ...todo,
        isDone: !todo.isDone,
      });
      notify("The todo was updated successfully!", "success");
    } catch (error) {
      console.log(error);
      notify("The todo was not updated successfully!", "error");
    } finally {
      getTodos();
    }
  };

  return (
    <ListItem
      disableGutters
      sx={{
        cursor: "pointer",
        overflow: "hidden",
        mb: "5px",
        "&:hover": {
          backgroundColor: todo.isDone ? green[50] : purple[50],
          borderRadius:"10px",
          pl:"5px",
          ".MuiSvgIcon-root": { color: todo.isDone ? "green" : "purple" },
          ".MuiListItemText-root": { color: todo.isDone ? "green" : "purple" },
        },
      }}
      secondaryAction={
        <IconButton aria-label="comment" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={todo.todo}
        sx={{wordWrap: "break-word", textTransform:"uppercase"}}
        onClick={() => toggleTodo(todo)}
      />
    </ListItem>
  );
};

export default TodoListItem;
