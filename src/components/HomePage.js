import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Css/Home.css'

const HomePage = () => {
    return (
        <div>
            <header className="bg-dark text-white text-center py-5">
                <h1>Welcome to Our ArticleHub</h1>
                <p>Your one-stop solution for all things tech</p>
            </header>

            <Container className="content mt-5">
                <Row>
                    <Col md={6} className="mb-4">
                        <div className="p-4 border rounded shadow-sm scale-on-hover">
                            <h2 className="mb-3">Featured Article</h2>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XwQgyYpavh305zdDja1GY4XDrOiq5Obx9AcbNZ8DTH69lhKO2XtARPckW_6chQUynfI&usqp=CAU"
                                style={{
                                    borderRadius: "50%",
                                    minWidth: "10px",
                                    minHeight: "10px",
                                    objectFit: "cover",
                                    width: "230px",
                                    height: "auto",
                                }}
                                alt=""
                            />
                            <p>
                                Discover the latest trends in technology and innovation. Stay
                                updated with our featured articles and insightful content that
                                helps you stay ahead in the tech world.
                            </p>
                            <Button variant="primary" as={Link} to="/login">
                                Log In
                            </Button>
                        </div>
                    </Col>
                    <Col md={6} className="mb-4">
                        <div className="p-4 border rounded shadow-sm scale-on-hover">
                            <h2 className="mb-3">About Us</h2>
                            <img
                                src="https://app.askaway.io/public/assets/img/login-img.png"
                                style={{
                                    borderRadius: "50%",
                                    minWidth: "10px",
                                    minHeight: "10px",
                                    objectFit: "cover",
                                    width: "200px",
                                    height: "auto",
                                }}
                                alt=""
                            />
                            <p>
                                We are passionate about technology and aim to provide valuable
                                resources and insights to tech enthusiasts. Learn more about
                                our mission and values.
                            </p>
                            <Button variant="primary" as={Link} to="/register">
                                Register Here
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="para mt-5">
                <h2> Welcome to my ArticleHub</h2>
                <img
                className="img-fluid mt-2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuynjLzG5GZWa3VHwpPZEuGm5KRrx4wsiYlFJeAvKhkIJdoXTxMQ7EAfcLoyHqsSWPNl0&usqp=CAU"
                    style={{
                    
                        minWidth: "10px",
                        minHeight: "10px",
                        objectFit: "cover",
                        width: "auto",
                        height: "auto",
                    }}
                    alt=""
                />
                <p>
                    The Rise of Artificial Intelligence: Discusses the transformative
                    impact of AI, its historical development, and recent advancements.
                    Understanding Quantum Computing: Explains the basics of quantum
                    computing, including superposition and entanglement, and its
                    potential applications. The Impact of Climate Change on Coastal
                    Cities: Examines the effects of climate change on coastal areas and
                    the strategies being implemented to mitigate these impacts.
                </p>
            </div>

            <footer className="bg-light text-center py-4 mt-5">
                <p>&copy; 2024 Our Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
