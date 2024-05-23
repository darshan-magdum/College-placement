import NavBar from "../../componets/Navbar/Navbar";
import { Carousel } from 'react-bootstrap';
import Corousel1 from "../../Images/Corousel1.png";
import Footer from "../../componets/Footer/Footer";

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
            <Footer/>
        </>
    );
}

export default Home;
