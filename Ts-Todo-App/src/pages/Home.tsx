import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddTodo from "../components/AddTodo";
import { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "../components/TodoList";
import { notify } from "../helper/sweetAlert";

const Home = () => {
  const [todos, setTodos] = useState<Todotype[]>([]);
  const url: string = import.meta.env.VITE_BASE_URL;

  const getTodos = async () => {
    try {
      const { data } = await axios<Todotype[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo: AddFn = async (text) => {
    try {
      await axios.post(url, { todo: text, isDone: false });
      notify("The todo was created successfully!", "success");
    } catch (error) {
      notify("The todo was not created successfully!", "error");
      console.log(error);
    } finally {
      getTodos();
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" color="error" align="center" mt={15}>
        Todo App with Typescript
      </Typography>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} getTodos={getTodos} />
    </Container>
  );
};

export default Home;
