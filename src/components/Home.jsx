import React from "react";
import "../App.css";
import StudentCard from "./StudentCard";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home-heading">Welcome to MAI — Software System</h1>
      <p className="home-description">
        Our School Management System is a complete digital solution designed to simplify academic and administrative tasks. From tracking student records, managing attendance, and monitoring grades to streamlining communication between teachers, parents, and students — everything is handled in one place. With an intuitive interface and powerful tools, schools can save time, reduce paperwork, and focus more on what truly matters: quality education.
      </p>
      <div className="card-wrapper">
        <StudentCard
          name="Muhammad Ahmad"
          rollNo="L1F24PACS0009"
          course="Compiler Construction"
          department="Computer Science - FOIT"
        />
        <StudentCard
          name="Muhammad Ali"
          rollNo="L1F24PACS00010"
          course="Theory of Automata"
          department="Computer Science - FOIT"
        />
        <StudentCard
          name="Muhammad Hamza"
          rollNo="L1F24PACS0011"
          course="Information Security"
          department="Computer Science - FOIT"
        />
        <StudentCard
          name="Muhammad Moiz"
          rollNo="L1F24PACS0012"
          course="Design & Analysis Algorithms"
          department="Computer Science - FOIT"
        />
        <StudentCard
          name="Muhammad Waqas"
          rollNo="L1F24PACS0013"
          course="Assembly Language"
          department="Computer Science - FOIT"
        />
      </div>
    </section>
  );
};

export default Home;
