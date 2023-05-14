import {useState} from 'react'
import { useTaskStore } from './useStore'

const TastList = () => {
  const {tasks} = useTaskStore()
  return (
    <ul>
      {
        tasks.map((t)=> (
          <li key={t.id}>
            <Task
              task={t}
            />
          </li>
        ))
      }
    </ul>
  )
}

const Task = ({task}) => {

  const [isEditing, setIsEditing] = useState(false);
  const {editTask, deleteTask} = useTaskStore()

  const onHandleCheckboxChange = () =>{
    editTask({...task, done: !task.done})
  }

  const onHandleEditChange = (e) => {

  }

  const onHandleDeleteClick = ()=> {
    deleteTask(task.id)
  }

  let taskContent;

  if(isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={onHandleEditChange}
        />
        <button onClick={() => setIsEditing(false)} >
          Save
        </button>
      </>
    )
  } else{
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (<label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={onHandleCheckboxChange}
      />
      {taskContent}
      <button onClick={onHandleDeleteClick}>
        Delete
      </button>
  </label>)
}

export default TastList

