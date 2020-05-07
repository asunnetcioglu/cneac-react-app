import React, {Component} from 'react';

class News extends Component {
    render() {
        return (
            <div className="news">

                <h2 className="news__title">Actualités</h2>

                <div className="container container--list">
                    <div className="list">
                        <div className="list__item news1">
                            <a href="#c"><span className="badge badge-pill badge-light">Resultats</span><span
                                className="text">Examen 2017</span></a>
                        </div>
                        <div className="list__item news2">
                            <a href="#c"><span className="badge badge-pill badge-light">Nouveau</span><span
                                className="text">Centre d'entrainement</span></a>
                        </div>
                        <div className="list__item news3">
                            <a href="#c"><span className="badge badge-pill badge-light">Resultats</span><span
                                className="text">Examen 2015</span></a>
                        </div>
                        <div className="list__item news4">
                            <a href="#c"><span className="badge badge-pill badge-light">Nouveau</span><span
                                className="text">Site internet</span></a>
                        </div>
                        <div className="list__item list__item--2 news5">
                            <a href="#c"><span className="badge badge-pill badge-light">Catalogue</span><span
                                className="text">Formations 2017/2018</span></a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default News;