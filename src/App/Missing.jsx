import './Missing.css';
import {useNavigate} from 'react-router-dom';

const Missing = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
    return (
        <div className="missing-div">
            <p>Whoops!!! &#128546;</p>
            <p> We can't find the page, you are searching for!!</p>
            <button 
                className="miss-to-home-button"
                onClick={() => {
                    handleClick();
                }}
            >Home Page</button>
        </div>
    )
}

export default Missing