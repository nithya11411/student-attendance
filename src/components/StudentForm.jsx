import { useContext, useState } from "react"
import { StudentContext } from "../context/StudentContext";
import { ThemeContext } from "../context/ThemeContext";

const StudentForm = ({isEdit, id, name, present}) => {
    console.log("00000",isEdit, id, name, present)
    const [studentDetail, setStudentDetail] = useState({
        studentName: name || '',
        present: present || false
    });
    const {addStudent} = useContext(StudentContext);
    const {theme} = useContext(ThemeContext); 

    const handleChange = (e) => {
        const {name, type, checked, value} = e.target;
        console.log(type, checked)
        setStudentDetail({
            ...studentDetail,
            [name] : type === "checkbox" ? checked : value
        })
    }

    console.log("studentDetail",studentDetail)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!studentDetail.studentName.trim) {
            return;
        }
        if (isEdit) {
            editStudent(studentDetail.studentName, studentDetail.present, id);
        } else {
            addStudent(studentDetail.studentName, studentDetail.present);
        }
        setStudentDetail({studentName: '', present: false})
    }

    return (
        <div className="grid-container-form" style={{marginTop: '25px'}}>
            <div className="grid-item-form">
                {!isEdit ? <h3 className={`form-title ${theme}`}>Enter Student</h3> : null}
                <form className="flex-row" onSubmit={handleSubmit}>
                    <input className={`input align-center ${theme}`} type="text" name="studentName" placeholder="Enter Student Name" value={studentDetail.studentName}
                        onChange={handleChange} />
                    <div className="input-check flex-row">
                        <input type="checkbox" name="present" onChange={handleChange} checked={studentDetail.present}/>
                        <p className="input-present">Is Present?</p>
                    </div>
                    <button className="add-stdbtn" type="submit">
                        {isEdit ? "Edit Student" : "Add Student"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default StudentForm;