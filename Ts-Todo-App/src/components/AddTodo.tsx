import { Box, Button, Container, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

interface IAddTodo {
  addTodo: AddFn;
}

const AddTodo = ({ addTodo }: IAddTodo) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    setText("");
    addTodo(text);
  };

  return (
    <Container maxWidth="lg" sx={{mb:'2rem'}}>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "center",
          m: { xs: 4, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}
      >
        <TextField
          id="todo"
          label="New Todo"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          inputProps={{ maxLength: 40 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
          variant="contained"
          color="primary"
          onClick={handleClick}
          disabled={!text.trim()}
          endIcon={<SaveIcon />}
        >
          Save Todo
        </Button>
      </Box>
    </Container>
  );
};

export default AddTodo;
