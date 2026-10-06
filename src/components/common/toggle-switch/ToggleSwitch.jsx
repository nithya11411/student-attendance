import './ToggleSwitch.css';

const ToggleSwitch = (props) => {
    const {isChecked, handleChecked, label, disabled} = props;
    return (
        <>
        {/* <label className="toggle-switch">
            {label && <>{label}</>}
            <input type="checkbox"
            checked={isChecked}
            onChange={handleChecked}
            />
            <span className={`slider ${isChecked === "dark" ? 'active sun-content' : 'moon-content'}`}></span>
        </label> */}
        <div className={`toggle-button`}>
            <button className={`theme-btn sun`} onClick={handleChecked} disabled={disabled}>𖤓</button>
            <button className={`theme-btn moon`} onClick={handleChecked} disabled={!disabled}>⏾</button>
        </div>
        </>
    )
}

export default ToggleSwitch;