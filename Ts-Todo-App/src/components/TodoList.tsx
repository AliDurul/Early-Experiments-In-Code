import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TodoListItem from "./TodoListItem";

interface ITodoList {
  todos: Todotype[];
  getTodos: GetFn;
}

const TodoList: React.FC<ITodoList> = ({ todos, getTodos }) => {
  const progressTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  return (
    <Grid container gap={2} justifyContent={"center"} alignItems={"center"}>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
      >
        <Typography variant="h4" color="secondary" align="center">
          InProgress Todos
        </Typography>
        {
        progressTodos.map((todo) => (
          <TodoListItem todo={todo} getTodos={getTodos} key={todo.id} />
        ))
        }
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid green",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
      >
        <Typography variant="h4" color="green" align="center">
          Completed Todos
        </Typography>
        {
        completedTodos.map((todo) => (
          <TodoListItem todo={todo} getTodos={getTodos} key={todo.id} />
        ))
        }
      </Grid>
    </Grid>
  );
};

export default TodoList;
