import React, {Component} from 'react';

class Ourservices extends Component {
    render() {
        return (
            <div className="services">

                <div className="container container--filters">
                    <div className="filters">
                        <a href="#c" className="badge badge-light">Services À La Personne Et Aux Territoires</a>
                        <span className="filters__seperator d-none d-lg-inline-block"></span> <a href="#c" className="badge badge-light">BAC
                        Pro</a><a href="#c" className="badge badge-light">BAC Techno</a><a href="#c" className="badge badge-light">BTSA</a>
                    </div>
                </div>

                <div className="container container--list">
                    <div className="list">
                        <div className="list__item list__item--pro">
                            <a href="#c"><span className="badge badge-pill badge-primary">BAC Pro</span><span
                                className="text">Technicien Conseil - Vente de Produits de Jardin</span></a>
                        </div>
                        <div className="list__item list__item--techno">
                            <a href="#c"><span className="badge badge-pill badge-primary">BAC Techno</span><span
                                className="text">STAV* Transformation Alimentaire</span></a>
                        </div>
                        <div className="list__item list__item--btsa">
                            <a href="#c"><span className="badge badge-pill badge-primary">BTSA</span><span
                                className="text">Développement, Animation des Territoires Ruraux</span></a>
                        </div>
                    </div>
                </div>

                <p className="postscript">*STAV. Sciences et Technologies de l'Agronomie et du Vivant</p>


            </div>
        );
    }
}

export default Ourservices;