import Header from '../components/Header.jsx'
import Form from '../components/Form.jsx'
import Todo from '../components/Todo.jsx'
import TodoList from '../components/TodoList.jsx'
import '../styles/App.css'

const App = () => {

  return (
    <div className='wrapper'>
      <div className='card-frame'>
        <Header cant='10' />
        <Form />
        <TodoList />
      </div>
    </div>
  )
}

export default App
