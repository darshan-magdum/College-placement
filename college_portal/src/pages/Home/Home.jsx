import NavBar from "../../componets/Navbar/Navbar";
import { Carousel } from "react-bootstrap";
import Corousel1 from "../../Images/Corousel1.png";
import carousel2 from "../../Images/carousel-2.jpg";
import newImage from "../../Images/new.jpg";
import Footer from "../../componets/Footer/Footer";
import Stdsplace_Info from "./Stdsplace_Info";
import NewSletters from "../../Images/NewSletters.png";
import { Link } from "react-router-dom";
import ServicesSection from "./ServicesSection";

function Home() {
  return (
    <>
      <NavBar />
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img
            className="d-block mx-auto img-fluid"
            src={Corousel1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block ms-auto mx-auto img-fluid"
            src={carousel2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>We will help you.</h3>
            <p className="bg-light text-dark">
              {" "}
              Our user-friendly interface makes it easy for students to explore
              job opportunities
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto img-fluid"
            src={newImage}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark bg-light">
              Designed to empower students in their career journey.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div
        className="container mt-5"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="mt-4 mb-4" style={{ textAlign: "center" }}>
              <h2
                className="text-center mb-4"
                style={{
                  color: "#007bff",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                }}
              >
                Welcome to our Find My Placement !
              </h2>
              <hr
                style={{
                  borderTop: "2px solid #007bff",
                  width: "40%",
                  margin: "auto",
                }}
              />
              <br></br>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#555",
                  marginBottom: "20px",
                }}
              >
                Designed to empower students in their career journey, our
                platform serves as a comprehensive hub for all things related to
                professional development and job placement. Through our portal,
                students gain access to a wide range of resources, including job
                listings from top recruiters, career guidance materials,
                skill-building workshops, and networking opportunities with
                industry professionals.
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#555",
                  marginBottom: "20px",
                }}
              >
                Our user-friendly interface makes it easy for students to
                explore job opportunities, submit applications, and track their
                progress throughout the recruitment process. Additionally,
                personalized recommendations help students discover roles that
                align with their interests and qualifications.
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#555",
                  marginBottom: "20px",
                }}
              >
                The application tracking system allows students to manage their
                job search efficiently, with updates on application statuses and
                deadlines. Networking opportunities within the portal enable
                students to connect with industry professionals, enhancing their
                career prospects. With the support of our dedicated team and
                robust features, our college placement portal is committed to
                helping students achieve their career aspirations and embark on
                fulfilling professional paths.
              </p>
            </div>
            <hr
              style={{
                borderTop: "2px solid #007bff",
                width: "40%",
                margin: "auto",
              }}
            />
          </div>
        </div>
      </div>

      <section class="newsletter">
        <div class="container">
          <Link to="/signup">
            <img
              className="img-fluid w-100"
              src={NewSletters}
              alt="First slide"
            />
          </Link>
        </div>
      </section>

      <ServicesSection />

      <Footer />
    </>
  );
}

export default Home;
