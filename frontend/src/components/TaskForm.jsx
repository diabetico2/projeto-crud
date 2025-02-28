import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [priority, setPriority] = useState('baixo');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim() === '') return;
    addTask({ name, subject, priority });
    setName('');
    setSubject('');
    setPriority('baixo');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da tarefa"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Disciplina/Assunto"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="baixo">Baixo</option>
        <option value="medio">Médio</option>
        <option value="alto">Alto</option>
      </select>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
