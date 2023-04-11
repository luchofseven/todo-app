import { useState } from 'react'
import ToDoForm from './components/ToDoForm'
import './styles/styles.min.css'
import Task from './components/Task'

function App () {
  const [tasks, setTasks] = useState(() => JSON.parse(window.localStorage.getItem('tasks')) || [])

  const deleteTask = (id) => {
    const parsedId = parseInt(id)
    const filterTask = tasks.filter((el) => el.id !== parsedId)
    setTasks(filterTask)
    window.localStorage.setItem('tasks', JSON.stringify(filterTask))
  }

  const handleDeteleAll = () => {
    const confirm = window.confirm('¿Realmente desea eliminar todas las tareas?')
    confirm && setTasks([])
    window.localStorage.setItem('tasks', JSON.stringify([]))
  }

  return (
    <main className='main-container'>
      <h1>Lista de Tareas</h1>
      <ToDoForm tasks={tasks} setTasks={setTasks} />
      <article className='tasks'>
        {tasks.length > 0 ? tasks.map(task => <Task key={task.id} task={task} deleteTask={deleteTask} />) : <p>"No hay tareas para mostrar"</p>}
      </article>
      {tasks.length > 0 ? <button onClick={handleDeteleAll}>Eliminar todas</button> : ''}
    </main>
  )
}

export default App
