import React from "react";
import Button from '@mui/material/Button';

function StudentItem({ student, markAttendance }) {
  return (
    <div className="student-item">
      <span>{student.name}</span>
      <Button color="secondary"onClick={() => markAttendance(student.id)}>
        {student.attendance ? "Present" : "Absent"}
      </Button>
    </div>
  );
}

export default StudentItem;
