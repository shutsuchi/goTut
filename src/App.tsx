import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
 return (
    <div className="App">
       <Header />
       <TodoList todos={[
          {title: "Do dishes", description: '', isCompleted: true},
          {title: "Homework", description: 'History project', isCompleted: false},
          {title: "Mow the lawn", description: '', isCompleted: false}
       ]} />
    </div>
  );
}

export default App;
