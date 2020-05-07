import React, {Component} from 'react';

class Follow extends Component {
    render() {
        return (
            <div className="follow">

                <h2 className="follow__title">Suivez-Nous!</h2>
                <div className="container">

                    <div className="follow__social">
                        <a href="#c"><img src={window.location.origin + '/images/icon/facebook.png'} alt="facebook" /></a>
                        <a href="#c"><img src={window.location.origin + '/images/icon/twitter.png'} alt="twitter" /></a>
                    </div>
                    <div className="follow__mail">

                        <p>Receves les dernières infos du CNEAC</p>


                        <form>
                            <div className="form-group">
                                <label htmlFor="inputEmail" className="sr-only">Adresse Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Adresse Email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Je m'inscris</button>
                        </form>

                    </div>

                    <a href="#c" id="messengerButton"><img src={window.location.origin + '/images/icon/messenger.svg'} alt="messenger" />Parlons-nous!</a>

                </div>
            </div>
        );
    }
}

export default Follow;