import React, { useState } from 'react';
import './SimpleTodo.css';

export default function SimpleTodo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setTodos([...todos, { id: Date.now(), text: value, done: false }]);
    setText('');
  };

  const toggleTodo = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  return (
    <div className="todo">
      <h1 className="todo-title">Todo</h1>

      <form className="todo-form" onSubmit={addTodo}>
        <input
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
        />
        <button className="todo-add" type="submit">
          Add
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t.id} className="todo-item">
            <label className="todo-label">
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleTodo(t.id)}
              />
              <span className={t.done ? 'todo-text done' : 'todo-text'}>
                {t.text}
              </span>
            </label>
            <button
              className="todo-delete"
              onClick={() => deleteTodo(t.id)}
              aria-label={`Delete ${t.text}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="todo-empty">No tasks yet.</p>}
    </div>
  );
}