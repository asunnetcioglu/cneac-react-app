import React, {Component} from 'react';
import Quickfind from "./quickfind/quickfind";
import Ourservices from "./services/ourservices";
import Sectors from "./sectors/sectors";
import Testimonials from "./testimonials/testimonials";
import News from "./news/news";
import Follow from "./follow/follow";


class Content extends Component {
    render() {
        return (
            <main role={"main"}>
                <Quickfind />
                <Ourservices />
                <Sectors />
                <Testimonials />
                <News />
                <Follow />
            </main>
        );
    }
}

export default Content;