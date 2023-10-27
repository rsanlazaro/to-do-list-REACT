import { Component } from 'react'
import PropTypes from 'prop-types'
import Checkmark from './Checkmark'
import '../styles/Todo.css'

// Función
// const Todo = () => {
//     return (
//         <div className="todo-container">
//             <p className="list-item">Tarea por hacer</p>
//             <button className="delete">Borrar</button>
//         </div>
//     )
// }

// Clase
class Todo extends Component {
    
    // Con state
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         done: false
    //     }
    // }

    // Con props
    state = {
        done: false
    }

    elementoTodo = () => {
        return (
            <>
                {/* Con state */}
                {/* <p className="list-item">Tarea por hacer</p>
                <button onClick={() => { this.setState({done: true}) }} className="delete">Cambiar a terminado</button> */}
                {/* <button className ="delete">Cambiar a terminado</button> */}
                {/* Con props */}
                { 
                this.props.done ? <Checkmark /> : <div style={{width: '36px'}}></div>}
                {/* { this.props.done && <Checkmark />} */}
                <p className="list-item">Tarea por hacer</p>
                {/* <button onClick={() => { this.setState({done: true}) }} className="delete">Cambiar a terminado</button> */}
                <button className="delete">Cambiar a terminado</button>
            </>
        )
    }

    render() {
        return (
            // Con state
            // <div className={`todo-container ${this.state.done ? 'dim-completed' : ''}`}>
            //     { this.elementoTodo() }
            // </div>
            // Con props
            <div className={`todo-container ${this.props.done ? 'dim-completed' : ''}`}>
                { this.elementoTodo() }
            </div>
        )
    }
};

Todo.propTypes = {
    done: PropTypes.bool
    // done: PropTypes.bool.isRequired
}

export default Todo