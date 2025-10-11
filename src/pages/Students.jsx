import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Student.css"
import studentData from "../assets/students";

const Students = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState(studentData);

  const handleView = (student) => {
    navigate(`/students/${student}`);
  };    

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="students-page">
      <h1>Students Arena</h1>
      <table className="students-table">
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Section</th>
            <th>Grade</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.section}</td>
              <td>{student.grade}</td>
              <td>{student.department}</td>
              <td>
                <button onClick={() => handleView(student.id)}>View</button>
                <button onClick={() => handleDelete(student.id)} className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
