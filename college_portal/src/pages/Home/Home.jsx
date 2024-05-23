import NavBar from "../../componets/Navbar/Navbar";
import { Carousel } from 'react-bootstrap';
import Corousel1 from "../../Images/Corousel1.png";
import Footer from "../../componets/Footer/Footer";
import Stdsplace_Info from "./Stdsplace_Info";

function Home() {
    return (
        <>
            <NavBar />
            <Carousel className="custom-carousel">
                <Carousel.Item>
                    <img
                        className="d-block mx-auto img-fluid" // Add img-fluid class for responsiveness
                        src={Corousel1} // Adjust the height here
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto img-fluid" // Add img-fluid class for responsiveness
                        src={Corousel1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto img-fluid" // Add img-fluid class for responsiveness
                        src={Corousel1} // Adjust the height here
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 ">
          <div className="mt-4 mb-4">
            <h2 className="text-center mb-4"><b>Welcome to our college placement portal!</b></h2>
            <hr />
            <p>
              Designed to empower students in their career journey, our platform serves as a comprehensive hub for all things related to professional development and job placement.
            </p>
            <p>
              Through our portal, students gain access to a wide range of resources, including job listings from top recruiters, career guidance materials, skill-building workshops, and networking opportunities with industry professionals.
            </p>
            <p>
              Our user-friendly interface makes it easy for students to explore job opportunities, submit applications, and track their progress throughout the recruitment process. Additionally, personalized recommendations help students discover roles that align with their interests and qualifications.
            </p>
            <p>
              With the support of our dedicated team and robust features, our college placement portal is committed to helping students achieve their career aspirations and embark on fulfilling professional paths.
            </p>
          </div>
          <hr />
        </div>
      </div>
   
    </div>
            <Stdsplace_Info/>
            <Footer/>
        </>
    );
}

export default Home;
