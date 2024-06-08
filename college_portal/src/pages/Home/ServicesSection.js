import React from "react";
import "../../Styles/Service.css";

function ServicesSection() {
  return (
    <section className="section-services">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-8">
            <div className="header-section">
              <h2 className="title">
                Exclusive <span>Services</span>
              </h2>
              <p className="description">
                Explore our exclusive services tailored to meet your needs. Your
                One time platform for Placement Support
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <SingleService
            icon="fab fa-500px"
            title=" Intuitive Design"
            description="Our college placement portal features an intuitive user interface, ensuring ease of navigation for students and Placement officer."
          />

          <SingleService
            icon="fab fa-angellist"
            title="User-Friendly Experience"
            description="Express delivery inno service effective logistics solution for delivery of small cargo delivery service."
          />

          <SingleService
            icon="fas fa-award"
            title="Easy Job Apply"
            description="With our Job apply feature, students can quickly submit their applications to desired job opportunities"
          />

          <SingleService
            icon="fab fa-asymmetrik"
            title="Direct Communication Channels"
            description="Our portal facilitates direct communication between the Training and Placement Office (TPO) and students, enabling quick dissemination of important announcements, job updates, and event notifications."
          />

          <SingleService
            icon="fas fa-broadcast-tower"
            title="Secure Authentication"
            description="Our portal utilizes secure authentication methods to verify user identities and prevent unauthorized access"
          />

          <SingleService
            icon="fab fa-canadian-maple-leaf"
            title="Career Guidance Materials by TPO"
            description=" We provide comprehensive career guidance materials, including resume writing tips, interview preparation resources, and career development workshops."
          />
        </div>
      </div>
    </section>
  );
}

function SingleService({ icon, title, description }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="single-service">
        <div className="part-1">
          <i className={icon}></i>
          <h3 className="title">{title}</h3>
        </div>
        <div className="part-2">
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
