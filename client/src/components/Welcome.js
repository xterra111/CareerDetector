import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import office1 from '../img/office1.jpg';
import office2 from '../img/office2.jpg';
import office3 from '../img/office3.jpg';
import office4 from '../img/office4.jpg';
import office5 from '../img/office5.jpg';
import office6 from '../img/office6.jpg';

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
            <h3 className="mt-3 mb-3 top-container text-mont text-center">
                <em>
                    "If you fell down yesterday, stand up today." --H.G. Wells
                </em>
                <h5>Get started by
                    <a className="btn-link-style-general btn btn-link-style-submit" href="/career-detector/add-job"><strong>adding a job</strong></a>
                !</h5>
            </h3>
            <Carousel>
                <Carousel.Item className="text-center" interval={1900}>
                    <img
                        className="d-block"
                        src={office1}
                        alt="work1"
                    />
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center" interval={1900}>
                    <img
                        className="d-block"
                        src={office2}
                        alt="work2"
                    />
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center" interval={1900}>
                    <img
                        className="d-block"
                        src={office3}
                        alt="work3"
                    />
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center" interval={1900}>
                    <img
                        className="d-block"
                        src={office4}
                        alt="work4"
                    />
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center" interval={1900}>
                    <img
                        className="d-block"
                        src={office5}
                        alt="work5"
                    />
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center" interval={1900}>
                    <img
                        className="d-block"
                        src={office6}
                        alt="work6"
                    />
                </Carousel.Item>
            </Carousel>



        </div>
)
}

export default Welcome