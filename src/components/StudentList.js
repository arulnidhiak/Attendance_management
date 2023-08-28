import React from "react";
import StudentItem from "./StudentItem";

function StudentList({ students, markAttendance }) {
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          markAttendance={markAttendance}
        />
      ))}
    </div>
  );
}

export default StudentList;
