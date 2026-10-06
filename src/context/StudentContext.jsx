import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({children}) => {
    const [students, setStudents] = useState(() => {
        const savedStudents = localStorage.getItem("students");
        return savedStudents ? JSON.parse(savedStudents.toString()) : [];
    })

    useEffect(() => {
        console.log("students----", students, students)
    }, [students])

    const addStudent = (name, present) => {
        const newStudent = {
            id: Date.now(),
            name,
            present: present
        }
        setStudents([...students, newStudent])
        localStorage.setItem("students", JSON.stringify(students));
    }

    const markAttendance = (id) => {
        setStudents(students.map((s) => s.id === id ? {...s, present : !s.present} : s))
    }

    const editStudent = (name, present, id) => {
        setStudents(students.map((s) => s.id === id ? {...s, present : present, name: name} : s))
    }

    const deleteStudent = (id) => {
        setStudents(students.filter((s) => s.id !== id))
    }

    const clearAllStudents = () => {
        setStudents([])
    }

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students])

    return (
        <StudentContext.Provider value={{
            students,
            setStudents,
            addStudent,
            markAttendance,
            deleteStudent,
            editStudent,
            clearAllStudents
        }}>
            {children}
        </StudentContext.Provider>
    )
}















// import { useState, useCallback, useMemo } from 'react';

// function StudentProvider({ children }) {
//   const [students, setStudents] = useState([]);

//   // 1. Stabilize the function reference
//   const addStudent = useCallback((newStudent) => {
//     setStudents((prev) => [...prev, newStudent]);
//   }, []);

//   const markAttendance = useCallback((id) => {
//     // ...
//   }, []);

//   const deleteStudent = useCallback((id) => {
//     // ...
//   }, []);

//   // 2. Stabilize the Context Object reference
//   const value = useMemo(() => ({
//     students,
//     addStudent,
//     markAttendance,
//     deleteStudent
//   }), [students, addStudent, markAttendance, deleteStudent]);

//   return (
//     <StudentContext.Provider value={value}>
//       {children}
//     </StudentContext.Provider>
//   );
// }