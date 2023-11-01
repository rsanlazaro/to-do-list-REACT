import PropTypes from 'prop-types'
import '../styles/Header.css'
import ShowHide from './ShowHide'

const Header = ({counter, show, toggleShow}) => {
    return (
        <div className="header-container">
            <h1 className="card-header-title header">
                {/* {`Hay ${cant} tareas`} */}
                Hay {counter} tareas
            </h1>
            <ShowHide toggleShow={toggleShow} show={show}/>
        </div>
    )
}

Header.propTypes = {
    counter: PropTypes.number
}

Header.defaultProps = {
    counter: 0
}

export default Header