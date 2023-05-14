import { create } from 'zustand'


export const useTaskStore = create((set) => (
  {
    tasks: [],
    addTask: (task) => set((state) => ({tasks: [...state.tasks, task]})),
    deleteTask: (id) => set((state) => ({tasks: state.tasks.filter(t => t.id !==  id)})),
    editTask: (task) => set((state)=> ({tasks: state.tasks.map(t => {
      if(t.id === task.id){
        return task
      }else{
        return t
      }
    })}))
  }
))
