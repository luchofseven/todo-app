import { useState } from 'react'

export default function Task ({ task, deleteTask }) {
  const [textDecoration, setTextDecoration] = useState(false)

  const { title, description } = task

  const handleClick = (e) => {
    const confirm = window.confirm('¿Desea eliminar ésta tarea?')
    if (confirm) {
      deleteTask(e.target.id)
    }
  }

  const handleTask = () => {
    setTextDecoration(!textDecoration)
  }

  return (
    <div className='task'>
      <h3>{title}</h3>
      <p onClick={handleTask} className={textDecoration ? 'text-decoration' : ''}>{description}</p>
      <button id={task.id} onClick={handleClick}>Eliminar</button>
    </div>
  )
}
