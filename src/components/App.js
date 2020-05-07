import React, {Component} from 'react';
import Header from './header/header';
import Content from "./content/content";
import Footer from "./footer/footer";
import './App.scss';
import $ from "jquery";
import {Col, Row} from "react-bootstrap";

$(document).ready(function(){
    // sticky & expanding navbar defaults
    let navbar, scrollLimit, windowTop;

    navbar = $('.header .navbar');
    scrollLimit = 48; //navbar top position

    $(window).on('scroll', function(){

        windowTop = $(window).scrollTop()

        // expanding & sticky navbar
        if (windowTop < scrollLimit) {
            navbar.removeClass('sticky');
        } else {
            navbar.addClass('sticky');
        }

        // sticky messenger button
        if (windowTop > 100) {
            $('#messengerButton').css('bottom',0);
        } else {
            $('#messengerButton').css('bottom','-5rem');
        }

    });

    if ($(window).width() < 1024 ){
        let lastScrollTop = 0;
        $(window).scroll(function(event){
            let st = $(this).scrollTop();
            if (st > lastScrollTop){
                $(".header .navbar.sticky").css('top','2rem');
            } else {
                $(".header .navbar.sticky").css('top','0rem');
            }
            lastScrollTop = st;
        });
    }

    //dropup
    $('.quick-find__select button').on('click', function(){
        $(this).next('.quick-find__dropup').css('display','block').animate({height:'15rem'},10);
        $(this).css('visibility','hidden').addClass('opened');
    });

    $(document).mouseup(function(e)
    {
        var container = $('.quick-find__dropup');
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            $('.quick-find__dropup').css({display:'none',height:0});
            $('.quick-find__select button').css('visibility','visible').removeClass("opened");
        }
    });
});


class App extends Component {
  render() {

    return (
            <Row>
                <Col>
                    <section>
                    <Header />
                    <Content />
                    <Footer />
                    </section>
                </Col>
            </Row>
    );
  }
}



export default App;
