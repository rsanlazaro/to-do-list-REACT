const ShowHide = ({ toggleShow, show }) => {
    return (
        <>
            <button
                onClick={toggleShow}
            >
                { show ? "Mostrar tareas pendientes" : "Mostrar todas las tareas"}
            </button>
        </>
    )
}

export default ShowHide