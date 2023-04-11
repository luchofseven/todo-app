
export default function ToDoForm ({ tasks, setTasks }) {
  const handleClick = (e) => {
    e.preventDefault()

    let taskObj = {}

    if (e.target.form.title.value === '' || e.target.form.description.value === '') {
      window.alert('El título o la descripción están vacíos')
    } else {
      if (tasks.length === 0) {
        taskObj = {
          id: 1,
          title: e.target.form.title.value.toUpperCase(),
          description: e.target.form.description.value
        }
        setTasks([taskObj])
        window.localStorage.setItem('tasks', JSON.stringify([taskObj]))
      } else {
        const newId = tasks[tasks.length - 1].id + 1

        taskObj = {
          id: newId,
          title: e.target.form.title.value.toUpperCase(),
          description: e.target.form.description.value
        }
        setTasks([...tasks, taskObj])
        window.localStorage.setItem('tasks', JSON.stringify([...tasks, taskObj]))
      }
    }

    e.target.form.reset()
  }

  return (
    <form className='todo-form'>
      <h2>Nueva tarea</h2>
      <input type='text' name='title' placeholder='Clase de programación' />
      <textarea name='description' cols='30' rows='5' placeholder='Mirar clase de programación a las 17Hs...' />
      <button onClick={handleClick}>Guardar</button>
    </form>
  )
}
