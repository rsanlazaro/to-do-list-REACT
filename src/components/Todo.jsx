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

    // elementoTodo = () => {
    //     return (
    //         <>

    //         </>
    //     )
    // }

    render() {
        return (
            // Con state
            // <div className={`todo-container ${this.state.done ? 'dim-completed' : ''}`}>
            //     { this.elementoTodo() }
            // </div>
            // Con props
            <div className={`todo-container ${this.props.done ? 'dim-completed' : ''}`}>
                {/* Con state */}
                {/* <p className="list-item">Tarea por hacer</p>
                <button onClick={() => { this.setState({done: true}) }} className="delete">Cambiar a terminado</button> */}
                {/* <button className ="delete">Cambiar a terminado</button> */}
                {/* Con props */}
                { }
                <Checkmark done={this.props.done} />
                {/* { this.props.done && <Checkmark />} */}
                <p onClick={e => this.props.toggleFn(e)} className="list-item" style={{ width: '100px' }}>{this.props.title}</p>
                {/* <button onClick={() => { this.setState({done: true}) }} className="delete">Cambiar a terminado</button> */}
                <button
                    className="delete"
                    onClick={e => this.props.deleteFn(e)}
                >Borrar</button>
            </div>
        )
    }
};

Todo.propTypes = {
    done: PropTypes.bool,
    title: PropTypes.string.isRequired,
    toggleFn: PropTypes.func.isRequired,
    deleteFn: PropTypes.func.isRequired
    // done: PropTypes.bool.isRequired
}

export default Todo