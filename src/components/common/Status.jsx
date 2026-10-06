const styles = {
    container: {
        // border: '1.5px solid  rgb(206, 206, 206)',
        borderRadius: '15px',
        margin: '4px',
        fontSize: '14px',
        color: '#fff'
    },
    green: {
        background: 'rgb(21, 93, 21)',
        padding: '25px'
    },
    red: {
        background: 'rgb(137, 3, 3)',
        padding: '15px' 
    },
    flex: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center'
    }
  };
  
const Status = ({text, color}) => {
    return (
        <div style={{...styles.flex}}>
            <p style={{...styles.container, ...styles[color], padding: '4px 10px'}}>{text}</p>
        </div>
    )
}

export default Status;