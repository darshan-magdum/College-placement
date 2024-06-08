import React, { useState } from "react";
import student1 from "../../Images/student1.jpg";
import student2 from "../../Images/student2.jpg";
import student3 from "../../Images/student3.jpg";

const studentsData = [
  {
    id: 1,
    name: "John Doe",
    branch: "Computer Science",
    company: "Google",
    package: "$100,000",
    year: 2023,
    photo: student1,
  },
  {
    id: 2,
    name: "Jane Smith",
    branch: "Electrical Engineering",
    company: "Microsoft",
    package: "$90,000",
    year: 2024,
    photo: student2,
  },
  {
    id: 3,
    name: "Jane Smith",
    branch: "Electrical Engineering",
    company: "Microsoft",
    package: "$90,000",
    year: 2024,
    photo: student3,
  },
  {
    id: 4,
    name: "Jane Smith",
    branch: "Electrical Engineering",
    company: "Microsoft",
    package: "$90,000",
    year: 2024,
    photo: student3,
  },
  {
    id: 5,
    name: "John Doe",
    branch: "Computer Science",
    company: "Google",
    package: "$100,000",
    year: 2023,
    photo: student1,
  },
  {
    id: 6,
    name: "Jane Smith",
    branch: "Electrical Engineering",
    company: "Microsoft",
    package: "$90,000",
    year: 2024,
    photo: student2,
  },
  {
    id: 7,
    name: "Jane Smith",
    branch: "Electrical Engineering",
    company: "Microsoft",
    package: "$90,000",
    year: 2024,
    photo: student3,
  },
  {
    id: 8,
    name: "Jane Smith",
    branch: "Electrical Engineering",
    company: "Microsoft",
    package: "$90,000",
    year: 2024,
    photo: student2,
  },
];

const Stdsplace_Info = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 8;

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = studentsData.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h2 className="text-center mb-4 Form-Heading">
        <b>Our Recent Placed Students</b>
      </h2>
      <h1 className="text-center custom-cursive">
        Congratulations to All of you
      </h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {currentStudents.map((student) => (
          <div key={student.id} className="col">
            <div className="card" style={{ height: "100%", width: "100%" }}>
              <img
                src={student.photo}
                className="card-img-top img-fluid"
                alt={student.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="text-dark">
                  <b>Branch:</b> {student.branch}
                </p>
                <p className="text-dark">
                  <b>Selected Company:</b> {student.company}
                </p>
                <p className="text-dark">
                  <b>Package:</b> {student.package}
                </p>
                <p className="text-dark">
                  <b>Year:</b> {student.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        studentsPerPage={studentsPerPage}
        totalStudents={studentsData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const Pagination = ({
  studentsPerPage,
  totalStudents,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <br></br>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Stdsplace_Info;
