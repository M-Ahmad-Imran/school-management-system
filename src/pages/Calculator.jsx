import React, { useState } from "react";
import "../css/Calculator.css";

const Calculator = () => {
  const [subjects, setSubjects] = useState([{ name: "", credit: "", grade: "" }]);
  const [cgpa, setCgpa] = useState(null);

  const handleChange = (index, field, value) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: "", credit: "", grade: "" }]);
  };

  const removeSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const gradeToPoint = (grade) => {
    switch (grade.toUpperCase()) {
      case "A+": return 4.0;
      case "A": return 3.7;
      case "B+": return 3.3;
      case "B": return 3.0;
      case "C+": return 2.7;
      case "C": return 2.3;
      case "D": return 2.0;
      case "F": return 0.0;
      default: return 0;
    }
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    subjects.forEach(({ credit, grade }) => {
      const c = parseFloat(credit);
      const g = gradeToPoint(grade);
      if (!isNaN(c) && g !== 0) {
        totalCredits += c;
        totalPoints += c * g;
      }
    });
    const result = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
    setCgpa(result);
  };

  return (
    <div className="cgpa-page">
      <h1>🎓 CGPA Calculator</h1>
      <p>Calculate your semester CGPA quickly and accurately.</p>

      {subjects.map((subject, index) => (
        <div className="subject-row" key={index}>
          <input
            type="text"
            placeholder="Subject Name"
            value={subject.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <input
            type="number"
            placeholder="Credit Hours"
            value={subject.credit}
            onChange={(e) => handleChange(index, "credit", e.target.value)}
          />
          <input
            type="text"
            placeholder="Grade (A, B+, etc.)"
            value={subject.grade}
            onChange={(e) => handleChange(index, "grade", e.target.value)}
          />
          <button className="remove-btn" onClick={() => removeSubject(index)}>❌</button>
        </div>
      ))}

      <div className="actions">
        <button className="btn add-btn" onClick={addSubject}>+ Add Subject</button>
        <button className="btn calc-btn" onClick={calculateCGPA}>Calculate</button>
      </div>

      {cgpa !== null && (
        <div className="result">
          <h2>Your CGPA: <span>{cgpa}</span></h2>
        </div>
      )}
    </div>
  );
};

export default Calculator;
