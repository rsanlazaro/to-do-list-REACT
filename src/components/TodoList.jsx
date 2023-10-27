import Todo from './Todo';
import '../styles/TodoList.css'

const TodoList = () => {
    return (
        <div style={{padding: '5px 0'}}>
            <h1>
                To do List
            </h1>
            <Todo done />
            <Todo />
            <Todo done/>
            <Todo done />
            <Todo done />
            <Todo done />
        </div>
    )
}

export default TodoList