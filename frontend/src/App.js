import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import ProgressBar from './components/ProgressBar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [newlyCreatedTasks, setNewlyCreatedTasks] = useState([]); // IDs das tarefas recém-criadas

  useEffect(() => {
    fetchTasks();
  }, [filter, priorityFilter]);

  const fetchTasks = async () => {
    let url = 'http://localhost:3000/tasks';
    const params = [];
    if (filter) params.push(`filter=${filter}`);
    if (priorityFilter) params.push(`priority=${priorityFilter}`);
    if (params.length > 0) url += '?' + params.join('&');

    const response = await fetch(url);
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async (task) => {
    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    
    // Adiciona a nova tarefa ao estado
    setTasks((prevTasks) => [...prevTasks, newTask]);
    // Marca o ID dessa tarefa como "nova" para animar
    setNewlyCreatedTasks((prev) => [...prev, newTask.id]);
  };

  const updateTask = async (id, updatedTask) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    });
    fetchTasks();
  };

  // Callback para remover o ID da lista de "novas tarefas" depois que a animação terminar
  const handleNewTaskAnimationEnd = (taskId) => {
    setNewlyCreatedTasks((prev) => prev.filter((id) => id !== taskId));
  };

  // Cálculo do progresso
  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const progress = tasks.length ? (completedTasksCount / tasks.length) * 100 : 0;

  return (
    <div className="container">
      <h1>Lista de Estudos</h1>

      {/* Formulário para adicionar tarefas */}
      <TaskForm addTask={addTask} />

      {/* Filtros */}
      <div>
        <input
          type="text"
          placeholder="Filtrar por nome..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
          <option value="">Todas as Prioridades</option>
          <option value="baixo">Baixo</option>
          <option value="medio">Médio</option>
          <option value="alto">Alto</option>
        </select>
      </div>

      {/* Lista de tarefas */}
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        newlyCreatedTasks={newlyCreatedTasks}
        onNewTaskAnimationEnd={handleNewTaskAnimationEnd}
      />

      {/* Barra de progresso */}
      <ProgressBar progress={progress} />
    </div>
  );
}

export default App;
