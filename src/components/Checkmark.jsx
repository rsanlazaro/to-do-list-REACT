import check from '../assets/Checkmark.svg';
import '../styles/Checkmark.css'

const Checkmark = () =>{
    return (
        <div>
            <img className='image-size' src={check} alt="Checkmark" />
        </div>
    )

}

export default Checkmark;