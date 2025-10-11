import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import students from "../assets/students";
import "../css/StudentsDetail.css"

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return <p>No student data found!</p>;
  }

  return (
    <div className="student-details">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Roll No.:</strong> {student.rollNo}</p>
      <p><strong>Section:</strong> {student.section}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <button onClick={() => navigate("/students")}>Back to Students</button>
    </div>
  );
};

export default StudentDetails;
