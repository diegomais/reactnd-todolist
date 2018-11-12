import React from 'react'
import './ColumnList.css'

const ColumnList = ({ tasks, columnTitle, updateTask, addTask }) => {
  const currentTasks = tasks.filter(task => task.status === columnTitle);
  return (
    <div className="column-list">
      <h3>{columnTitle}</h3>

      {columnTitle === 'To Do' && (
        <form onSubmit={addTask}>
          <input type="text" />
          <button type="submit">Criar tarefa</button>
        </form>
      )}

      <ul>
        {currentTasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              onChange={e => updateTask(e.target, task)}
              checked={columnTitle === 'Done'}
            />
            <span>{task.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ColumnList
