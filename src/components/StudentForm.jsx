import React, { useState, useEffect } from "react";
import "../css/Form.css";

const StudentForm = ({ onSubmit, editingStudent, onEdit }) => {
  const [student, setStudent] = useState({
    id: Date.now(),
    name: "",
    rollNo: "",
    department: "",
    pic: "",
    grades: [{ subject: "", grade: "" }],
  });

  useEffect(() => {
    if (editingStudent) setStudent(editingStudent);
  }, [editingStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudent({ ...student, pic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGradeChange = (index, e) => {
    const newGrades = [...student.grades];
    newGrades[index][e.target.name] = e.target.value;
    setStudent({ ...student, grades: newGrades });
  };

  const addGradeField = () => {
    setStudent({
      ...student,
      grades: [...student.grades, { subject: "", grade: "" }],
    });
  };

  const removeGradeField = (index) => {
    const newGrades = student.grades.filter((_, i) => i !== index);
    setStudent({ ...student, grades: newGrades });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) onEdit(student);
    else onSubmit(student);

    setStudent({
      id: Date.now(),
      name: "",
      rollNo: "",
      department: "",
      pic: "",
      grades: [{ subject: "", grade: "" }],
    });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h3>{editingStudent ? "Edit Student" : "Add Student"}</h3>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="rollNo"
        placeholder="Roll No"
        value={student.rollNo}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={student.department}
        onChange={handleChange}
        required
      />
      <input type="file" onChange={handleFileChange} />

      <h4>Subjects & Grades</h4>
      {student.grades.map((grade, index) => (
        <div key={index} className="grade-row">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={grade.subject}
            onChange={(e) => handleGradeChange(index, e)}
            required
          />
          <input
            type="number"
            name="grade"
            placeholder="Grade (0-4)"
            step="0.1"
            min="0"
            max="4"
            value={grade.grade}
            onChange={(e) => handleGradeChange(index, e)}
            required
          />
          {student.grades.length > 1 && (
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeGradeField(index)}
            >
              ❌
            </button>
          )}
        </div>
      ))}
      <button type="button" className="add-grade-btn" onClick={addGradeField}>
        ➕ Add Subject
      </button>

      <button type="submit" className="submit-btn">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
