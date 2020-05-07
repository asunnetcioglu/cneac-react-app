import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

class Testimonials extends Component {
    render() {
        let settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            fade: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false
                    }
                }
            ]
        };
        return (


            <div className="testimonials">
                <h2 className="testimonials__title">Témoignages</h2>

                <div className="container">
                    <div className="testimonials__slider">
            <Slider {...settings}>
                <div className="testimonial">
                    <div className="row">
                        <div className="col-md-4 col-lg-3">
                            <div className="testimonial__person">
                                <figure><img src={window.location.origin + '/images/jane.jpg'} alt="" /></figure>
                                <h3>Jane Doe</h3>
                                <span className="badge badge-pill badge-primary">BAC Pro</span>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-8 d-flex align-items-center">
                            <p className="testimonial__text">
                                &laquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                                deleniti, dolorem, blanditiis consectetur hic aperiam natus facere, ut quae
                                doloremque aliquam.&raquo;
                            </p>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="row">
                        <div className="col-md-4 col-lg-3">
                            <div className="testimonial__person">
                                <figure><img src={window.location.origin + '/images/jane.jpg'} alt="" /></figure>
                                <h3>Jane Doe</h3>
                                <span className="badge badge-pill badge-primary">BAC Techno</span>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-8 d-flex align-items-center">
                            <p className="testimonial__text">
                                &laquo;Ut congue massa nisl, at consequat ipsum mattis eu. In leo lorem,
                                scelerisque in venenatis non, faucibus vitae turpis. Vivamus et nulla erat.
                                Sed tempus neque risus, vitae rutrum massa egestas sit amet.&raquo;
                            </p>
                        </div>
                    </div>
                </div>
               </Slider>
            </div>
        </div>

        <a href="#c" className="btn btn-light mx-auto">Voir tous les témoignages</a>
    </div>


        );
    }
}

export default Testimonials;