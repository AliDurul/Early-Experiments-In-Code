
const TaskForm = ({ addTask }) => {


    const handleSubmit = (e) => {
        e.preventDefault()
        let task = e.target[1].value
        if (task.trim() === "") return
        addTask(task)
        e.target.reset()
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">+</button>
            <input type="text" placeholder="Your Next Task.." />
        </form>
    )
}

export default TaskForm