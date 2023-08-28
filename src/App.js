import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import initialStudentData from "./components/studentData";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students"));
    console.log(storedStudents);
    if (storedStudents) {
      setStudents(storedStudents);
    } else {
      // Only initialize with initialStudentData if local storage data doesn't exist
      localStorage.setItem("students", JSON.stringify(initialStudentData));
      setStudents(initialStudentData);
    }
  }, []); // Empty dependency array ensures this runs only once, on component mount

  const markAttendance = (studentId) => {
  setStudents((prevStudents) =>
    prevStudents.map((student) =>
      student.id === studentId
        ? { ...student, attendance: !student.attendance }
        : student
    )
  );
  
  // Update local storage with the modified students data
  const updatedStudents = students.map((student) =>
    student.id === studentId
      ? { ...student, attendance: !student.attendance }
      : student
  );
  localStorage.setItem("students", JSON.stringify(updatedStudents));
};

  return (
    <div className="app">
      <Header />
      <StudentList students={students} markAttendance={markAttendance} />
    </div>
  );
}

export default App;