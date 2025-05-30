import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";

function App() {


  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if(tasks.length === 0) return
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    setTasks(tasks || [])
  }, []);


  const addTask = (task) => {
    setTasks([...tasks, { title: task, isdone: false }]);
  };

  const updateTaskDone = (taskIndex,newDone) => {
    setTasks(prev => {
      const newTasks = [...prev]
      newTasks[taskIndex].isdone = newDone
      return newTasks
    })
  }

  function renameTask(index,newName) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].title = newName;
      return newTasks;
    })
  }

  function removeTask(indexToRemove) {
    setTasks(prev => {
      return prev.filter((taskObject,index) => index !== indexToRemove);
    });
  }



const numberComplete = tasks.filter(task => task.isdone).length
const numberTotal = tasks.length

function getMessage() {
  const percentage = numberComplete/numberTotal * 100;
  if (percentage === 0) {
    return 'Try to do at least one! 🙏';
  }
  if (percentage === 100) {
    return 'Nice job for today! 🏝';
  }
  return 'Keep it going 💪🏻';
}


  return (
    <main>
      <h1>{numberComplete} / {numberTotal}</h1>
      <h2>{getMessage()}</h2>
      <TaskForm addTask={addTask} />

      {tasks.map((task, i) => (
        <Tasks key={i} {...task} 
        onToggle={(done) =>updateTaskDone(i,done)} 
        onRename={(newTitle)=>renameTask(i,newTitle)}
        onTrash={() => removeTask(i)}
        
        />
      ))}
    </main>
  );
}

export default App;
