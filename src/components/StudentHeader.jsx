import { useContext } from "react";
import { StudentContext } from "../context/StudentContext"
import { ThemeContext } from "../context/ThemeContext";
import ToggleSwitch from "./common/toggle-switch/ToggleSwitch";

const StudentHeader = () => {
    const {students} = useContext(StudentContext); 
    const {theme, setTheme} = useContext(ThemeContext); 
    const presentCount = students.filter((s) => s.present).length;

    return (
        <div className={`header ${theme}`}>
            <p className={`title`}>Student Attendence</p>
            <div className={`literal ${theme}`}>
                <div className={`hitem col1 ${theme}`}>
                    Total: <span className="h-span">{students.length}</span>
                </div>
                <div className={`hitem col2 ${theme}`}>
                    Present: <span className="h-span">{presentCount}</span>
                </div>
                <div className={`hitem col3 ${theme}`}>
                    Absent: <span className="h-span">{students.length - presentCount}</span>
                </div>
                <div className={`hitem col4 ${theme}`}>
                    Attendance in percent: <span className="h-span">{students.length > 0 ? ((presentCount/ (students.length)) * 100).toFixed(2) : 0}%</span>
                </div>
                <>
                <div className={`literal ${theme}`}>
                    <p>Current theme: {theme}</p>
                    <ToggleSwitch 
                        isChecked={theme}
                        handleChecked={(e) => setTheme(theme === 'light' ?  'dark' : 'light')}
                        disabled={theme === 'light' ? true : false}
                        label={"Change theme"}/>
                </div>
                </>
            </div>
        </div>
    )
}

export default StudentHeader;