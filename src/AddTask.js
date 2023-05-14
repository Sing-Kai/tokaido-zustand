import {useState} from 'react'
import { useTaskStore } from './useStore'

const AddTask = () => {
  const {addTask} = useTaskStore()
  const [text, setText] = useState('')

  const handleOnClick = () =>{
    setText('')
    addTask({id: Math.random(), text: text, done: false})
  }

  return (
    <>
      <input
        placeholder="add a task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleOnClick}>
        Add
      </button>
    </>
  )
}

export default AddTask