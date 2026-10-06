import { useState } from 'react'
import './App.css'
import ThemeProvider from './context/ThemeProvider'
import { StudentProvider } from './context/StudentContext'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import StudentHeader from './components/StudentHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        <StudentProvider>
          <StudentHeader />
          <StudentForm />
          <StudentList />
        </StudentProvider>
      </ThemeProvider>
    </>
  )
}

export default App
