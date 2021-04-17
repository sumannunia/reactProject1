import React from 'react';
import {useState} from 'react';
import '../css/login.css';
import AuthLeftCol from './login-comps/LeftLoginSignupBox';
function Signup() {
    const [password, setPassword] = useState(false);
    const [gender, setGender] = useState(null);
    const [showGender, setShowGender] = useState(false);
    const [createKid, setCreateKid] = useState(false);
    const [kidData, setKidData] = useState({email: "",code: "", kidPassword: "", kidGender: "", kidDob: "", kidName: "", kidClass: ""});
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setKidData({...kidData, [name]: value});
        // console.log(kidData);
    };
    return (
        <section>
            <article className="container logincontainer">
                <div className="row theRowForLogin">
                    <AuthLeftCol login={false} signup={true} />
                    <div className="col-md-7 col-lg-7 form-col">
                        <SignupWithGoogleManual password={password} setPassword={setPassword} kidData={kidData} setKidData={setKidData} handleInputChange={handleInputChange}/>
                        <AfterVerify password={password} showGender={showGender} setShowGender={setShowGender} kidData={kidData} setKidData={setKidData} handleInputChange={handleInputChange} />
                        <AboutKid gender={gender} setGender={setGender} showGender={showGender} setShowGender={setShowGender} createKid={createKid} setCreateKid={setCreateKid} kidData={kidData} setKidData={setKidData} handleInputChange={handleInputChange} />
                        <KidNameStdBlock createKid={createKid} setCreateKid={setCreateKid} kidData={kidData} setKidData={setKidData} handleInputChange={handleInputChange} />
                    </div>
                </div>
            </article>
        </section>
    )
}

function SignupWithGoogleManual(props){
    const [showSpinner, setShowSpinner] = useState(false)
    const verifyEmail = (e) => {
        e.preventDefault();
        const {email} = {...props.kidData};
        if(email){
            setShowSpinner(true);
            (async function(){
                
                let obj = {
                    code: " "
                }
                let request = await fetch(`http://13.233.126.86:8443/api/send-verification-code/${email}`,{
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                });
                let data = await request.json();
                console.log(data);
                if(request.status === 200){
                    if(data.status.code == 200){

                        props.setPassword(true);
                    }
                }else {
                    alert(data.message)
                }
                setShowSpinner(false)

            })();
        }
    };
    return <div className="inside-form-col" className={props.password === false ? 'inside-form-col ' : 'd-none'}>
        <h3 className="iqkids-text">Signup to the<span className="iq-color">IQ</span>kids </h3>
        <button className="Loginwithgoogle btn">
            <span>
                
            </span>
            Signup with google
        </button>
        <div className="or-sec">
            <span className="divider"></span>
            <span className="or">or</span>
        </div>
        <div className="login-form-section">
            <form >
                <div className="form-group">
                    <label htmlFor="loginEmail">Email address</label>
                    <input type="email" name='email' className="form-control" id="loginEmail" aria-describedby="emailHelp" onChange={props.handleInputChange} required/>
                    
                </div>
                {/* <div className="form-group">
                    <label for="loginPassword">Password</label>
                    <input type="password" className="form-control" id="loginPassword"/>
                </div> */}
                
                <button type="submit" className="btn login-btn" onClick={verifyEmail} disabled={showSpinner == true ? 'disabled' : ''}>
                    <div className={showSpinner == true ? 'spinner-border mr-3' : 'd-none'} style={{width: "15px", height: "15px"}} ></div>
                    Verify</button>
            </form>
            
        </div>
    </div>
}
function AfterVerify(props){
    const handleSubmit = (e) => {
        e.preventDefault();
        const {code, kidPassword} = {...props.kidData};
        if(code && kidPassword){

            props.setShowGender(true);
        };
    }
    return <>
        <div  className={props.password === true && props.showGender == false ? 'inside-form-col ' : 'd-none'}>
            <h3 className="iqkids-text">Signup to the<span className="iq-color">IQ</span>kids </h3>
            <div className="login-form-section">
                <form >
                    <div className="form-group">
                        <label htmlFor="emailCode">Enter code sent to rickjohn43@gmail.com</label>
                        <input type="text" name='code' className="form-control" id="emailCode" aria-describedby="emailHelp" onChange={props.handleInputChange} required />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="signupPass">Password</label>
                        <input type="password" name="kidPassword" className="form-control" id="signupPass" onChange={props.handleInputChange} required />
                    </div>
                    
                    <button type="submit" className="btn login-btn" onClick={handleSubmit}>Set password</button>
                </form>
            
            </div>
        </div>
    </>
}
function AboutKid(props){
    const handleSubmit = (e) => {
        e.preventDefault();
        const {kidGender, kidDob} = {...props.kidData};
        if(kidGender && kidDob){
            props.setCreateKid(true);
        }
    }
    const changeGender = (gender) => {
        props.setGender(gender)
        props.setKidData({...props.kidData, kidGender: gender});
    }
    return <> 
            <div  className={props.showGender === true && props.createKid == false ? 'inside-form-col' : 'd-none'}>
                <h3 className="iqkids-text">Tell us about your kid</h3>
                <div className="login-form-section">
                    <div className="genderWrapper">
                        <div className={props.gender == 'girl' ? "gender activeGender" : 'gender'} onClick={() => changeGender('girl') }>
                            <div className="theSmallCircle"></div>
                            <span className="genderName">Girl</span>
                        </div>
                        <div className={props.gender == 'boy' ? "gender activeGender" : 'gender'} onClick={() => changeGender('boy') }>
                            <div className="theSmallCircle"></div>
                            <span className="genderName">Boy</span>
                        </div>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" className="form-control" name="kidDob" id="dob" onChange={props.handleInputChange} required />
                        </div>
                        
                        <button type="submit" className="btn login-btn continue" onClick={ handleSubmit}>Continue 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="white"/>
                                <path d="M7.33337 12H16.6667" stroke="#415D91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 7.33337L16.6667 12L12 16.6667" stroke="#415D91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
    </>
}
function KidNameStdBlock(props){
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.kidData)
    }
    return <> 
            <div  className={props.createKid === true ? 'inside-form-col' : 'd-none'}>
                <h3 className="iqkids-text">Tell us about your kid</h3>
                <div className="login-form-section">
                    
                    <form>
                        <div className="form-group">
                            <label htmlFor="kidName">Kid's Name</label>
                            <input type="text" className="form-control" id="kidName" name="kidName" onChange={props.handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="kidStd">Kid's Standard</label>
                            <input type="text" className="form-control" id="kidStd" name="kidClass" onChange={props.handleInputChange} required />
                        </div>
                        
                        <button type="submit" className="btn login-btn continue" onClick={handleSubmit}>Create account 
                            
                        </button>
                    </form>
                </div>
            </div>
    </>
}
export default Signup;
