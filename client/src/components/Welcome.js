import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import image4 from '../img/image4.jpg';
import image5 from '../img/image5.jpg';
import image6 from '../img/image6.jpg';

const Welcome = () => {
    return (
        <div>

                        {/* ...
                .   .    .    .       ..--.     .    .--.
                |\  |   / \    \     / |   )   / \   |   )
                | \ |  /___\    \   /  |--:   /___\  |--'
                |  \| /     \    \ /   |   ) /     \ |  \
                '   ''       `    '    '--' '       `'   ` */}
            <div className="text-center " id="myHeader">
                <div className="text-mont p-1 d-flex justify-content-between align-items-center">
                    <p className="navbar-brand">
                        <strong>Welcome to Career Detector!</strong>
                    </p>
                    <p className="navbar-brand">
                    <em>
                        What kind of windows does 2 Chainz own? TWO PANES!
                    </em>
                    </p>
                </div>

                <div className="mb-3 text-center">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/career-detector/welcome">
                            CAREER DETECTOR
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="m-1 nav-item">
                                    <a className="nav-link" href="/career-detector/dashboard">
                                        DASHBOARD
                                    </a>
                                </li>
                                <li className="m-1 nav-item">
                                    <a className="nav-link" href="/career-detector/add-job">
                                        ADD JOB
                                    </a>
                                </li>
                                <li className="m-1 nav-item">
                                    <a className="nav-link" href="/">
                                        SIGN OUT
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    {/* 
    -.--.    .    .--.  .--. .   . .-. .---..    
    :       / \   |   ):    :|   |(   )|    |    
    |      /___\  |--' |    ||   | `-. |--- |    
    :     /     \ |  \ :    ;:   ;(   )|    |    
    -`--''       `'   ` `--'  `-'  `-' '---''---'
    the carousel slide class allows the movement for slides */}

            <Carousel>
                <Carousel.Item className="text-center" interval={1900}>
                    <img
                    className="d-block"
                    src={image1}
                    />
                </Carousel.Item>
                <Carousel.Item className="text-center" interval={1900}>
                    <img
                    className="d-block"
                    src={image2}
                    />
                </Carousel.Item>
                <Carousel.Item className="text-center" interval={1900}>
                    <img
                    className="d-block"
                    src={image3}
                    />
                </Carousel.Item>
                <Carousel.Item className="text-center" interval={1900}>
                    <img
                    className="d-block"
                    src={image4}
                    />
                </Carousel.Item>
                <Carousel.Item className="text-center" interval={1900}>
                    <img
                    className="d-block"
                    src={image5}
                    />
                </Carousel.Item>
                <Carousel.Item className="text-center" interval={1900}>
                    <img
                    className="d-block"
                    src={image6}
                    />
                </Carousel.Item>
            </Carousel>



        </div>
)
}

export default Welcome