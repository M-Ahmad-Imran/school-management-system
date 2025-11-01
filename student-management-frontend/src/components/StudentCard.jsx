import React from "react";
import "../App.css";

const StudentCard = ({ name, rollNo, course, department }) => {
  return (
    <div className="student-card">
      <h2 className="student-name">{name}</h2>
      <p><strong>Roll No:</strong> {rollNo}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Department:</strong> {department}</p>
    </div>
  );
};

export default StudentCard;
