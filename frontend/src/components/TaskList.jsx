import React, { useState } from 'react';

const TaskList = ({ tasks, updateTask, deleteTask, newlyCreatedTasks, onNewTaskAnimationEnd }) => {
  const [removingTasks, setRemovingTasks] = useState([]);

  // Toggle "concluir/desmarcar"
  const handleToggle = (task) => {
    updateTask(task.id, { completed: !task.completed });
  };

  // Animação de remoção (já visto antes)
  const handleRemove = (id) => {
    setRemovingTasks((prev) => [...prev, id]);
  };

  const handleAnimationEndRemove = (taskId) => {
    deleteTask(taskId);
    setRemovingTasks((prev) => prev.filter((id) => id !== taskId));
  };

  return (
    <ul>
      {tasks.map((task) => {
        const isRemoving = removingTasks.includes(task.id);
        const isNew = newlyCreatedTasks.includes(task.id);

        return (
          <li
            key={task.id}
            className={`
              ${isRemoving ? 'removing' : ''} 
              ${isNew ? 'newly-added' : ''}
            `}
            onAnimationEnd={(e) => {
              // Se está removendo, chama handleAnimationEndRemove
              if (isRemoving) {
                handleAnimationEndRemove(task.id);
              }
              // Se é novo e a animação terminou, chama onNewTaskAnimationEnd
              if (isNew && e.target.classList.contains('newly-added')) {
                onNewTaskAnimationEnd(task.id);
              }
            }}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {/* Exibe ID + nome */}
            <span>
              {task.id} - {task.name} - {task.subject} - Prioridade: {task.priority}
            </span>
            <button onClick={() => handleToggle(task)}>
              {task.completed ? 'Desmarcar' : 'Concluir'}
            </button>
            <button onClick={() => handleRemove(task.id)}>Remover</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
