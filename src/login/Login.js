import React from 'react';
import '../css/login.css';
import AuthLeftCol from './login-comps/LeftLoginSignupBox';
import { connect, useDispatch } from "react-redux";
import { loggedIn } from '../reducer/Actions';
import { Link } from 'react-router-dom';



function Login( { redux_state_loggedIn }) {
    console.log(redux_state_loggedIn );
    console.log(loggedIn);
    const dispatch = useDispatch();
    return (
        <section>
            <article className="container logincontainer">
                <div className="row theRowForLogin">
                    <AuthLeftCol login={true} signup={false} />
                     <div className="col-md-7 col-lg-7 form-col">
                        <div className="inside-form-col">
                            <h3 className="iqkids-text">Login to the<span className="iq-color">IQ</span>kids </h3>
                            <button className="Loginwithgoogle btn">
                                <span>
                                    
                                </span>
                                Login with google
                            </button>
                            <div className="or-sec">
                                <span className="divider"></span>
                                <span className="or">or</span>
                            </div>
                            <div className="login-form-section">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="loginEmail">Email address</label>
                                        <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp"/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="loginPassword">Password</label>
                                        <input type="password" className="form-control" id="loginPassword"/>
                                    </div>
                                    
                                    <button type="submit" className="btn login-btn" onClick={ () => dispatch(loggedIn(!redux_state_loggedIn))}>Login = {String(redux_state_loggedIn)}</button>
                                </form>
                            </div>
                            <div className="teacher-login">
                                <Link to="/teacher"><h4>Are yo a teacher?</h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        redux_state_loggedIn: state.redux_state_loggedIn
    };
};


export default connect(mapStateToProps)(Login);
