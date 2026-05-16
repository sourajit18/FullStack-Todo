import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Createtodo } from './components/Createtodo'
import { Displaytodos } from './components/Displaytodos'

function App() {
  const [todos, setTodos] = useState([])
   
    fetch("https://fullstack-todobysourajit.onrender.com/get_todos")
      .then(async (res) => {
        const updatedTodoState = await res.json()
        setTodos(updatedTodoState.todoList)
      })
  return (
    <div>
      <Createtodo />
      <Displaytodos todos={todos} />
    </div>
  )
}

export default App
