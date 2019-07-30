import React from 'react';
import Todos from './components/Todos'
import './App.css';
import Header from './components/layouts/header';
import AddTodo from './components/addTodo';


class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        tittle: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        tittle: 'dinner with wife',
        completed: false
      },
      {
        id: 3,
        tittle: 'submit project',
        completed: false
      }
    ]
  }

  // toogle complete
  markComplete = (id) => {
   this.setState({ todos: this.state.todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
   }) });
  }

  //delete a todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id 
      !== id)]});
  }

  addTodo = (tittle) => {
    const newtodo  = {
      id: 4,
      tittle,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newtodo]})
  }

  render(){
  return (
    <div className="App">
      <div className="container">
      <Header />
      <AddTodo addTodo={this.addTodo} />
      <Todos todos = {this.state.todos} markComplete = {this.markComplete}
      delTodo = {this.delTodo}/>
      </div>
    </div>
  );
}
}

export default App;
