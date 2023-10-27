import Todo from './Todo';
import '../styles/TodoList.css'
import PropTypes from 'prop-types'

const TodoList = ({ tasks, deleteFn, toggleFn }) => {
    return (
        <div style={{ padding: '5px 0' }}>
            <h1>
                To do List
            </h1>
            {
                tasks.map((element, index) =>
                    <Todo
                        key={index}
                        done={element.done}
                        title={element.title}
                        deleteFn={(e) => deleteFn(e, index)}
                        toggleFn={(e) => toggleFn(e, index)}
                    />
                )
            }
        </div>
    )
}

TodoList.propTypes = {
    tasks: PropTypes.array,
    toggleFn: PropTypes.func,
    deleteFn: PropTypes.func
}

TodoList.defaultProps = {
    tasks: []
}

export default TodoList