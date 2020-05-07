import React, {Component} from 'react';

class Quickfind extends Component {
    render() {
        return (
            <div className="quick-find">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-4 col-xl-3 quick-find__title">Trouver Ma Formation</div>
                        <div className="col-lg-4 col-xl-5 quick-find__select">
                            <button>Services À La Personne Et Aux Territoires</button>
                            <div className="quick-find__dropup">
                                <ul>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 quick-find__select">
                            <button>Choix Multiples</button>
                            <div className="quick-find__dropup">
                                <ul>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                    <li><label><input type="checkbox"/>Lorem ipsum dolor sit amet</label></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quickfind;