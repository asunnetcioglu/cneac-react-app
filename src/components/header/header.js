import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
//import {Navbar} from "react-bootstrap";
//import {Nav} from "react-bootstrap";

class Header extends Component {
    render() {
        return (

            <Row>
                <Col className="header header--home">

                    <nav className="navbar navbar-expand-lg">
                        <Container>
                            <a className="navbar-brand" href="#a">
                                <img src={window.location.origin + '/images/brand/logo.svg'} className="d-inline-block align-top" alt="" height="26" />
                            </a>

                            <div className="d-lg-none">
                                <button className="navbar-toggler" type="button">
                                    <img src={window.location.origin + '/images/icon/search.svg'} alt="search icon" width="18" height="18" />
                                </button>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <img src={window.location.origin + '/images/icon/menu.svg'} alt="menu icon" width="18" height="18" />
                                </button>
                            </div>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#a">Qui Sommes-nous</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#a">Secteurs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#a">Formation</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#a">Témoignage</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#a">Actualité</a>
                                    </li>
                                    <li className="nav-item d-none d-lg-block">
                                        <a className="nav-link" href="#a"><img src={window.location.origin + '/images/icon/search.svg'}
                                                                              className="d-inline-block align-top" alt=""
                                                                              width="18" height="18" /></a>
                                    </li>
                                    <li className="nav-item d-none d-lg-block">
                                        <a className="btn btn-primary" href="#a">Inscrivez-vous</a>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </nav>

                    <div className="hero">
                        <div className="container">
                            <div className="hero__content">
                                <h1 className="hero__heading">L'Enseignement Agricole Par Correspondance</h1>
                                <p className="hero__subhead">Depuis plus de 20 ans nous préparons aux diplômes publics du
                                    Ministère de l'Agriculture.</p>
                                <a className="btn btn-primary btn-lg" href="#a">Présentation</a>
                                <a className="btn btn-light btn-lg d-lg-none" href="#a">Inscrivez-vous</a>
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>




        );
    }
}

export default Header;
