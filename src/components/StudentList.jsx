import { useContext, useEffect, useState } from "react"
import { StudentContext } from "../context/StudentContext";
import Status from "./common/Status";
import { ThemeContext } from "../context/ThemeContext";
import StudentForm from "./StudentForm";
import PopupModal from "./common/popup-modal/PopupModal";

const StudentStatus = {
    ALL: "all",
    PRESENT: "present",
    ABSENT: "absent"
}

const StudentList = () => {
    const {students, markAttendance, editStudent, deleteStudent} = useContext(StudentContext);
    const {theme} = useContext(ThemeContext); 
    const [search, setSearch] = useState('');
    const [filterPresent, setFilterPresent] = useState(StudentStatus.ALL)
    const [filteredStudents, setFilteredStudents] = useState(students);
    const [isEdit, setIsEdit] = useState(false);

    const handleStatusChange = (event) => {
        const {name, type, value, checked} = event.target; //destructing
        console.log("value",value)
        setFilterPresent(value)
        console.log(filterPresent)

    }

    const handleEdit = (id) => {
        setIsEdit(true);
        editStudent(id)
    }

    useEffect(() => {
        if(filterPresent === StudentStatus.PRESENT) {
            setFilteredStudents(students?.filter((student) => student?.name?.toLowerCase().includes(search.toLowerCase()) && student.present));
        } else if(filterPresent === StudentStatus.ABSENT) {
            setFilteredStudents(students?.filter((student) => student?.name?.toLowerCase().includes(search.toLowerCase()) && !student.present));
        } else {
            setFilteredStudents(students?.filter((student) => student?.name?.toLowerCase().includes(search.toLowerCase())));
        }
    }, [search, filterPresent, students])

    console.log("isEdit", isEdit)

    return (
        <div className="list-card" style={{marginTop: '50px'}}>
            <div className="flex-container-col">
                <div>
                    <h2 style={{margin: '0px'}}>Students List</h2> 
                </div>
                <div className="flex-container-col">
                    <h4 style={{margin: '0px'}}>Search / Filter</h4> 
                    <input type="text" placeholder="Search Student..."
                        value={search} onChange={(e) => setSearch(e.target.value)} />
                    <label className={`column-flex`}>
                        <span style={{fontSize: '14px'}}>Is Present</span>
                        <select style={{padding: '15px' , margin: '10px'}} 
                            name="filterPresent" onChange={handleStatusChange}>
                            <option value={StudentStatus.ALL}>All</option>
                            <option value={StudentStatus.PRESENT}>Present</option>
                            <option value={StudentStatus.ABSENT}>Absent</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="grid-container">
                {filteredStudents.map((student) => (
                    <>
                        <div className="grid-item">
                            <h3>{student.name}</h3>
                            <Status text={student.present ? "Present" : "Absent"} color={student.present ? "green" : "red"}/>
                            <br></br>
                            <button className="btn-mark" onClick={() => markAttendance(student.id)}>
                                {student.present ? "Mark Absent" : "Mark Present"}
                            </button>
                            <button className="btn-edit" onClick={() => handleEdit(student.id)}>
                                Edit
                            </button>
                            <button className="btn-delete" onClick={() => deleteStudent(student.id)}>
                                Delete
                            </button>
                         </div>
                         {isEdit ? <PopupModal 
                            isOpen={isEdit} 
                            onClose={() => setIsEdit(false)} 
                            title={`Edit Student - ${student.name}`}
                        > 
                            <StudentForm isEdit={isEdit} id={student.id} name={student.name}
                                present={student.present}/>
                        </PopupModal> : null}
                    </>
                ))
                }
                </div>
            {/* {show && <Alert show={show} message={"Are you sure you want to delete ?"} buttonText={"Delete"}/>} */}
        </div>
    )
}

export default StudentList;