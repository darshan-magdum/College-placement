import React from 'react';
import NavBar from '../../componets/Navbar/Navbar';
import book from '../../Images/book.jpg';
import Footer from '../../componets/Footer/Footer';

const About = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <div className="row">
                <h2 className="text-center mb-4 Form-Heading" ><b>About Us</b></h2>
                <hr></hr>
                    <div className="col-lg-6">
                      
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
                    <div className="col-lg-6">
                        <img src={book} alt="About Us" className="img-fluid h-100" />
                    </div>
                </div>
            </div>
            <br></br>
            <Footer/>
        </>
    );
}

export default About;
