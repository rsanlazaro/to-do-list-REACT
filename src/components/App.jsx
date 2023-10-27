import Header from '../components/Header.jsx'
import Form from '../components/Form.jsx'
import Todo from '../components/Todo.jsx'
import TodoList from '../components/TodoList.jsx'
import '../styles/App.css'
import { Component } from 'react'

// const App = () => {

//   return (
//     <div className='wrapper'>
//       <div className='card-frame'>
//         <Header cant='10' />
//         <Form />
//         <TodoList />
//       </div>
//     </div>
//   )
// }

class App extends Component {
  state = {
    todos: [
    ],
    todosOriginales: [
    ],
    showButton: true,
  }

  handleClick = (event) => {
    // this.setState({
    //   todos: [
    //     { title: "Tarea 1", done: true },
    //     { title: "Tarea 2", done: false },
    //     { title: "Tarea 3", done: true },
    //     { title: "Tarea 4", done: false },
    //     { title: "Tarea 5", done: true },
    //     { title: "Tarea 6", done: false },
    //     { title: "Tarea 7", done: true },
    //     { title: "Tarea 8", done: false },
    //     { title: "Tarea 9", done: true },
    //     { title: "Tarea 10", done: false },
    //   ],
    //   // showButton: false,
    // })
  }

  handleClickDelete = (event, index) => {
    const todos = [...this.state.todos]
    todos.splice(index, 1)
    this.setState({ todos })
  }

  handleClickToggleDone = (event, index) => {
    const todos = [...this.state.todos]
    todos[index].done = !todos[index].done
    this.setState({ todos })
  }

  handleClickReset = (event) => {
    this.setState({
      todos: [...this.state.todosOriginales]
    })
  }

  componentDidMount() {
    this.setState({
      todos: [
        { title: "Tarea 1", done: true },
        { title: "Tarea 2", done: false },
        { title: "Tarea 3", done: true },
        { title: "Tarea 4", done: false },
        { title: "Tarea 5", done: true },
        { title: "Tarea 6", done: false },
        { title: "Tarea 7", done: true },
        { title: "Tarea 8", done: false },
        { title: "Tarea 9", done: true },
        { title: "Tarea 10", done: false },
      ],
      todosOriginales: [
        { title: "Tarea 1", done: true },
        { title: "Tarea 2", done: false },
        { title: "Tarea 3", done: true },
        { title: "Tarea 4", done: false },
        { title: "Tarea 5", done: true },
        { title: "Tarea 6", done: false },
        { title: "Tarea 7", done: true },
        { title: "Tarea 8", done: false },
        { title: "Tarea 9", done: true },
        { title: "Tarea 10", done: false },
      ],
      // showButton: false,
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='card-frame'>
          <Header counter={this.state.todos.length} />
          <TodoList
            tasks={this.state.todos}
            toggleFn = {this.handleClickToggleDone}
            deleteFn = {this.handleClickDelete}
          />
          <Form />
          <button onClick={this.handleClickReset}>Reestablecer tareas</button>

          {/* {
            this.state.showButton ?
            <button onClick={this.handleClick}>Inicializar</button>:
            null
          } */}
        </div>
      </div>
    )
  }
}

export default App
