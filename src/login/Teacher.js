import React from 'react'
import {useState} from 'react';
import '../css/login.css';
import AuthLeftCol from './login-comps/LeftLoginSignupBox';
function Teacher() {
    const [showSpinner, setShowSpinner] = useState(false)
    return (
        <article className="container logincontainer">
                <div className="row theRowForLogin">
                    <AuthLeftCol login={true} signup={false} />
                    <div className="col-md-7 col-lg-7 form-col">
                        <div className="login-form-section">
                            <div className="inside-form-col">
                            <form >
                                <div className="form-group">
                                    <label htmlFor="loginEmail">Email address</label>
                                    <input type="email" name='email' className="form-control" id="loginEmail" aria-describedby="emailHelp"  required/>
                                    
                                </div>
                                <div className="form-group">
                                    <label for="loginPassword">Password</label>
                                    <input type="password" className="form-control" id="loginPassword"/>
                                </div>
                                
                                <button type="submit" className="btn login-btn" disabled={showSpinner == true ? 'disabled' : ''}>
                                    <div className={showSpinner == true ? 'spinner-border mr-3' : 'd-none'} style={{width: "15px", height: "15px"}} ></div>
                                    Login</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
    )
}

export default Teacher
