import React, {useState} from 'react'


const TodoList = (props) => {
  
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleClearClick = () => {
    setTaskList([])
  }

  const handleDoneClick = (index) =>{
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index,1)
    setTaskList(updatedTaskList)
  }

  const handleAddClick = () => {
    if (task.trim() !== "") {
        setTaskList([...taskList, task])
        setTask('')
    } else {
        alert ('please enter a task')
    }
  }

  let myStyle = {
    backgroundColor: '#27374D'
  }
    return (
      <div className="container mt-4">
      <div className="card" >
        <h1 className="card-header">TO-DO LIST</h1>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter task..."
              onChange={handleChange}
              value={task}
            />
            <button className="btn btn-primary" onClick={handleAddClick}>
              Add
            </button>
          </div>
          <ul className="list-group">
            {taskList.map((task, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {task}
                <button className="btn btn-success" onClick={() => handleDoneClick(index)}>Done</button>
              </li>
            ))}
          </ul>
          {taskList.length > 0 && (
            <button className="btn btn-primary mt-3" onClick={handleClearClick}>
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoList;