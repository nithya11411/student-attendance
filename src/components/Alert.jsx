import { useState } from "react";

const Alert = (props) => {
    const {show, message, buttonText} = props;
    const [showAlert, setShowAlert] = useState(show);

    return (
        <>
        {showAlert && <div style={{
          marginTop: '10px',
          padding: '15px',
          backgroundColor: '#ffcccb',
          border: '1px solid red',
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
            <p>{message}</p>
            <button onClick={() => setShowAlert(false)}>{buttonText}</button>
        </div>
        }       
        </>
    )
}

export default Alert;