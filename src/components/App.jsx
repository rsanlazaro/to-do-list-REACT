import Header from '../components/Header.jsx'
import Form from '../components/Form.jsx'
import Todo from '../components/Todo.jsx'
import TodoList from '../components/TodoList.jsx'
import '../styles/App.css'
// import { Component } from 'react'
import { useState } from 'react'

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

// COMPONENT
// class App extends Component {

// FUNCTION

const App = () => {

  // COMPONENT
  // state = {
  //   todos: []
  // }

  // FUNCTION
  const [todos, setTodos] = useState([
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
  ])

  const [show, setShow] = useState(true)

  const handleClick = (event) => {
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

  const handleClickDelete = (event, index) => {
    const todosList = [...todos]
    todosList.splice(index, 1)
    setTodos(todosList)
  }

  const handleClickToggleDone = (event, index) => {
    const todosList = [...todos]
    todosList[index].done = !todosList[index].done
    setTodos(todosList)
  }

  // const handleClickReset = (event) => {
  //   this.setState({
  //     todos: [...todosOriginales]
  //   })
  // }

  const handleAddTask = (title) => {
    const itExists = todos.find(element => element.title.toLowerCase() === title.toLowerCase())
    if (title === "") {
      alert("Ingrese una tarea")
      return
    }
    if (itExists) {
      alert("Esta tarea ya existe")
      return
    }

    const todosList = [...todos];

    if (!itExists) {
      setTodos(todosList.concat([{ title: title, done: false }]))
    }
  }

  const filterTodos = todos.filter(element =>
    !element.done || element.done === show
  )

  const handleClickToggleShow = () => {
    setShow(!show)
  }


  // componentDidMount() {
  //   this.setState({
  //     todos: [
  //       { title: "Tarea 1", done: true },
  //       { title: "Tarea 2", done: false },
  //       { title: "Tarea 3", done: true },
  //       { title: "Tarea 4", done: false },
  //       { title: "Tarea 5", done: true },
  //       { title: "Tarea 6", done: false },
  //       { title: "Tarea 7", done: true },
  //       { title: "Tarea 8", done: false },
  //       { title: "Tarea 9", done: true },
  //       { title: "Tarea 10", done: false },
  //     ],
  //     todosOriginales: [
  //       { title: "Tarea 1", done: true },
  //       { title: "Tarea 2", done: false },
  //       { title: "Tarea 3", done: true },
  //       { title: "Tarea 4", done: false },
  //       { title: "Tarea 5", done: true },
  //       { title: "Tarea 6", done: false },
  //       { title: "Tarea 7", done: true },
  //       { title: "Tarea 8", done: false },
  //       { title: "Tarea 9", done: true },
  //       { title: "Tarea 10", done: false },
  //     ],
  //     // showButton: false,
  //   })
  // }

  // render() {
  return (
    <div className='wrapper'>
      <div className='card-frame'>
        <Header
          counter={filterTodos.length}
          toggleShow={handleClickToggleShow}
          show={show}
        />
        <TodoList
          tasks={filterTodos}
          toggleFn={handleClickToggleDone}
          deleteFn={handleClickDelete}
        />
        <Form addTaskFn={handleAddTask} />
        {/* <button onClick={this.handleClickReset}>Reestablecer tareas</button> */}

        {/* {
            this.state.showButton ?
            <button onClick={this.handleClick}>Inicializar</button>:
            null
          } */}
      </div>
    </div>
  )
  // }
}

export default App
