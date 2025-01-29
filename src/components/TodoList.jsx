import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter todos into completed and uncompleted
  const completedTodos = todos.filter(todo => todo.completed);
  const uncompletedTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="todo-container">
      <nav className="dashboard-nav">
        <div className="nav-left">
          <button onClick={() => navigate('/dashboard')}>Back</button>
          <button onClick={() => navigate('/folders')}>Folders</button>
          <button onClick={() => navigate('/todo')} className="active">Todo List</button>
        </div>
        <button className="logout-btn" onClick={() => navigate('/login')}>Logout</button>
      </nav>
      
      <div className="todo-content">
        <h2>Todo List</h2>
        
        <form onSubmit={handleAddTodo} className="todo-form">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo..."
          />
          <button type="submit">Add</button>
        </form>

        <div className="todo-sections">
          <div className="todo-section">
            <h3>Tasks To Do ({uncompletedTodos.length})</h3>
            <div className="todo-list">
              {uncompletedTodos.map(todo => (
                <div key={todo.id} className="todo-item">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span className="todo-text">{todo.text}</span>
                  <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                    ×
                  </button>
                </div>
              ))}
              {uncompletedTodos.length === 0 && (
                <p className="empty-message">No tasks to do!</p>
              )}
            </div>
          </div>

          <div className="todo-section completed-section">
            <h3>Completed Tasks ({completedTodos.length})</h3>
            <div className="todo-list">
              {completedTodos.map(todo => (
                <div key={todo.id} className="todo-item completed">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span className="todo-text">{todo.text}</span>
                  <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                    ×
                  </button>
                </div>
              ))}
              {completedTodos.length === 0 && (
                <p className="empty-message">No completed tasks yet!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList; 