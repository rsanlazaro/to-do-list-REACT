import check from '../assets/Checkmark.svg';
import '../styles/Checkmark.css'

const Checkmark = ({ done }) => {
    return (
        <div>
            {
                done ?
                    <img className='image-size' src={check} alt="Checkmark" /> :
                    <div style={{ width: '36px' }}></div>
            }
        </div>
    )

}

export default Checkmark;