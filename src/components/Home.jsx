import React from "react";
import "../App.css";
import StudentCard from "./StudentCard";
const STUDENT_DATA = [
  { rollNo: 'L1F24PACS0009', name: 'Muhammad Ahmad', course: 'Information Tecchnology', department: 'Computer Science' },
  { rollNo: 'L1F24PACS0010', name: 'Muhammad Ali', course: 'Enterpenureship', department: 'Computer Science' },
  { rollNo: 'L1F24PACS0011', name: 'Muhammad Moiz', course: 'Assembly Language', department: 'Computer Science' },
  { rollNo: 'L1F24PACS0012', name: 'Muhammad Waqas', course: 'Design Analysis Alogrithms', department: 'Computer Science' },
  { rollNo: 'L1F24PACS0013', name: 'Muhammad Husain', course: 'Compiler Construction', department: 'Computer Science' },
  { rollNo: 'L1F24PACS0014', name: 'Muhammad Waheed', course: 'Theory of Automata', department: 'Computer Science' },
];
const Home = () => {
  return (
    <section className="home">
      <h1 className="home-heading">Welcome to MAI — Software System</h1>
      <p className="home-description">
        Our School Management System is a complete digital solution designed to simplify academic and administrative tasks. From tracking student records, managing attendance, and monitoring grades to streamlining communication between teachers, parents, and students — everything is handled in one place. With an intuitive interface and powerful tools, schools can save time, reduce paperwork, and focus more on what truly matters: quality education.
      </p>
      <div className="card-wrapper">
        {STUDENT_DATA.map((student) => (
          <StudentCard 
          name={student.name} 
          key={student.rollNo} 
          rollNo={student.rollNo} 
          course={student.course}
          department={student.department}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
