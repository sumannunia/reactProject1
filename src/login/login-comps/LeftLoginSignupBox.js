import React from 'react';
import {Link} from 'react-router-dom';

const LeftLoginSignupBox = (props) => {
    return (
        
            <div className="col-md-6 col-lg-4 theleft-col">
                <div className="inside-theleft-col">
                    <Link to="/login">
                        <div className="login-sec">
                            <div className={props.login === true ? "illustrator-login active" : 'illustrator-login'}>
                                <div className="inside-illastrator"></div>
                            </div>
                            <h3 className={props.login === true? "log-type-text activetext" : "log-type-text"}>Login</h3>
                        </div>
                    </Link>
                    <Link to="/signup">
                        <div className="login-sec">
                            <div className={props.signup === true ? "illustrator-login active" : 'illustrator-login'}>
                                <div className="inside-illastrator"></div>
                            </div>
                            <h3 className={props.signup === true ? "log-type-text activetext" : 'log-type-text'}>Signup</h3>
                        </div>
                    </Link>
                </div>
            </div>
        
    )
}

export default LeftLoginSignupBox;
