import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../css/Student.css";

const Students = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    subjects: "",
    grade: "",
    cgpa: "",
  });

  const calculateCGPA = (grades) => {
    const gradeMap = { A: 4, B: 3, C: 2, D: 1, F: 0 };
    const arr = grades.split(",").map((g) => g.trim().toUpperCase());
    const total = arr.reduce((acc, g) => acc + (gradeMap[g] || 0), 0);
    return (total / arr.length).toFixed(2);
  };

  const loadStudents = async () => {
    try {
      const { data } = await API.get("/students");
      setStudents(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch students!");
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // Add or Update Student
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      cgpa: calculateCGPA(formData.grade),
    };

    try {
      if (editingId) {
        const { data } = await API.put(`/students/${editingId}`, payload);
        setStudents(students.map((s) => (s._id === editingId ? data : s)));
        setEditingId(null);
      } else {
        const { data } = await API.post("/students", payload);
        setStudents([...students, data]);
      }

      setShowForm(false);
      setFormData({
        name: "",
        rollNo: "",
        department: "",
        subjects: "",
        grade: "",
        cgpa: "",
      });

    } catch (err) {
      alert("Something went wrong!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;
    await API.delete(`/students/${id}`);
    setStudents(students.filter((s) => s._id !== id));
  };

  const handleEdit = (student) => {
    setFormData(student);
    setEditingId(student._id);
    setShowForm(true);
  };

  return (
    <div className="students-page">
      <h1>Student Management</h1>

      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Add Student"}
      </button>

      {showForm && (
        <form className="student-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input type="text" placeholder="Roll No" required
            value={formData.rollNo}
            onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
          />
          <input type="text" placeholder="Department" required
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          />
          <input type="text" placeholder="Subjects (comma separated)" required
            value={formData.subjects}
            onChange={(e) => setFormData({ ...formData, subjects: e.target.value })}
          />
          <input type="text" placeholder="Grades (A,B,C)" required
            value={formData.grade}
            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
          />

          <button type="submit">
            {editingId ? "Update Student" : "Add Student"}
          </button>
        </form>
      )}

      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Dept.</th>
            <th>Subjects</th>
            <th>Grades</th>
            <th>CGPA</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((s) => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.rollNo}</td>
                <td>{s.department}</td>
                <td>{s.subjects}</td>
                <td>{s.grade}</td>
                <td>{s.cgpa}</td>
                <td>
                  <button onClick={() => navigate(`/students/${s._id}`)}>
                    View
                  </button>
                  <button onClick={() => handleEdit(s)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(s._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="7">No students added.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
