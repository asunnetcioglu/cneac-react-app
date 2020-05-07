import React, {Component} from 'react';
import {Container} from "react-bootstrap";
class Footer extends Component {
    render() {
        return (
            <footer className={"footer"}>
                    <Container className="container">
                        <ul>
                            <li><a href="#f"><img src={window.location.origin + '/images/brand/logo-footer.svg'} alt="cneac" height="18" /></a></li>
                            <li><a href="#f">Mentions Legales</a></li>
                            <li><a href="#f">Plan Du Site</a></li>
                            <li><a href="#f">Contacts</a></li>
                            <li><a href="#f">Nous Trouver</a></li>
                        </ul>
                    </Container>
            </footer>
        );
    }
}

export default Footer;