import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/StudentsDetail.css";

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userEmail = loggedInUser?.email;
  const allStudents = JSON.parse(localStorage.getItem("students")) || {};
  const students = allStudents[userEmail] || [];
  const student = students.find((s) => s.id === parseInt(id));

  const calculateCGPA = (grades) => {
    if (!grades || grades.length === 0) return 0;
    const total = grades.reduce((sum, g) => sum + parseFloat(g.grade || 0), 0);
    return (total / grades.length).toFixed(2);
  };

  if (!student) {
    return <p>No student found.</p>;
  }

  return (
    <div className="student-details-page">
      <div className="details-card">
        <img
          src={student.pic || "https://via.placeholder.com/100"}
          alt="student"
          className="details-pic"
        />
        <h2>{student.name}</h2>
        <p>
          <strong>Roll No:</strong> {student.rollNo}
        </p>
        <p>
          <strong>Department:</strong> {student.department}
        </p>

        <h3>Subjects & Grades</h3>
        <table className="grade-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {student.grades.map((g, i) => (
              <tr key={i}>
                <td>{g.subject}</td>
                <td>{g.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="cgpa">
          <strong>CGPA:</strong> {calculateCGPA(student.grades)}
        </p>

        <button onClick={() => navigate("/students")} className="back-btn">
          ← Back to Students
        </button>
      </div>
    </div>
  );
};

export default StudentDetails;
