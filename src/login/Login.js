import React from 'react';
import '../css/login.css';
import AuthLeftCol from './login-comps/LeftLoginSignupBox';
import {Link} from 'react-router-dom';
function Login() {
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
                                    
                                    <button type="submit" className="btn login-btn">Login</button>
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

export default Login;
