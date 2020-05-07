import React, {Component} from 'react';
import Slider from "react-slick";
class Sectors extends Component {

    render() {
        let settings = {
            arrows:false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infiniteScroll: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (
            <div className="sectors">
                <h2 className="sectors__title">Les Sectours</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto ">
                            <div className="sectors__slider">
            <Slider {...settings}>
                <div><a href="#a" className="sectors__item sectors__item--a"><span>Services à la Persone et aux Territoires</span></a></div>
                <div><a href="#a" className="sectors__item sectors__item--b"><span>Gestion et Protection de la Nature</span></a>
                </div>
                <div><a href="#a" className="sectors__item sectors__item--c"><span>Services à la Persone et aux Territoires</span></a>
                </div>
                <div><a href="#a" className="sectors__item sectors__item--d"><span>Gestion et Protection de la Nature</span></a>
                </div>

            </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#c" className="btn btn-outline-primary">Voir tous les secteurs</a>
            </div>
        );
    }
}

export default Sectors;