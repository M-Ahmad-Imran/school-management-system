import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import "../css/Student.css";

const Students = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userEmail = loggedInUser?.email;
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Load students for this user
  useEffect(() => {
    const allStudents = JSON.parse(localStorage.getItem("students")) || {};
    setStudents(allStudents[userEmail] || []);
  }, [userEmail]);

  // Save back to localStorage
  const saveStudents = (updatedList) => {
    const allStudents = JSON.parse(localStorage.getItem("students")) || {};
    allStudents[userEmail] = updatedList;
    localStorage.setItem("students", JSON.stringify(allStudents));
    setStudents(updatedList);
  };

  const handleAdd = (student) => {
    const newList = [...students, student];
    saveStudents(newList);
    setShowForm(false);
  };

  const handleEditSave = (updatedStudent) => {
    const newList = students.map((s) =>
      s.id === updatedStudent.id ? updatedStudent : s
    );
    saveStudents(newList);
    setEditingStudent(null);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    const newList = students.filter((s) => s.id !== id);
    saveStudents(newList);
  };

  const calculateCGPA = (grades) => {
    if (!grades || grades.length === 0) return 0;
    const total = grades.reduce((sum, g) => sum + parseFloat(g.grade || 0), 0);
    return (total / grades.length).toFixed(2);
  };

  const topStudent =
    students.length > 0
      ? students.reduce((max, s) =>
          calculateCGPA(s.grades) > calculateCGPA(max.grades) ? s : max
        )
      : null;

  return (
    <div className="students-page">
      <h2>Students Management</h2>

      <button
        className="add-btn"
        onClick={() => {
          setShowForm(!showForm);
          setEditingStudent(null);
        }}
      >
        {showForm ? "Cancel" : "Add Student"}
      </button>

      {showForm && (
        <StudentForm
          onSubmit={handleAdd}
          onEdit={handleEditSave}
          editingStudent={editingStudent}
        />
      )}

      {students.length === 0 ? (
        <p className="no-data">No students registered yet.</p>
      ) : (
        <table className="students-table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Roll No</th>
              <th>Department</th>
              <th>CGPA</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className={
                  topStudent?.id === student.id ? "top-student-row" : ""
                }
              >
                <td>
                  <img
                    src={student.pic || "https://via.placeholder.com/50"}
                    alt="student"
                    className="table-pic"
                  />
                </td>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.department}</td>
                <td>{calculateCGPA(student.grades)}</td>
                <td>
                  <button onClick={() => navigate(`/students/${student.id}`)}>
                    View
                  </button>
                  <button
                    onClick={() => {
                      setEditingStudent(student);
                      setShowForm(true);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Students;
