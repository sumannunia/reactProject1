import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/result.css';
import Subject from './SubjectCard';
import LeaderBoard from './LeaderBoard';
const Result = (props) => {
    const [activeCard, setActiveCard] = React.useState(null);
    const selectedSubject = (activeCard) =>{
        console.log(activeCard);
    }
    return (
        <div>
            <div className="container quiz-result-container">
                <h5 className="yourQuirText">Your quiz result is here: </h5>
                <div className="theResultBoxContainer row">
                    <div className="col-md-8 theresultCol">
                        <div className="inside-theresult-col">

                            <div className="boxForCorrectAnswer common-box">
                                <h5 className="theResultValue">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#83B11B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 12L11 14L15 10" stroke="#83B11B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span> {props.correctAnswer[0]} /{props.data.length}</span>

                                </h5>
                                <h6 className="correction-text">Correct</h6>
                            </div>
                            <div className="theBorderDiv"></div>
                            <div className="boxForCorrectAnswer common-box">
                                <h5 className="theResultValue">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#DD690A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14 10L10 14M10 10L14 14L10 10Z" stroke="#DD690A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                    <span>{props.correctAnswer[1]} /{props.data.length}</span>

                                </h5>
                                <h6 className="correction-text">Wrong</h6>
                            </div>
                        </div>
                        <div className="inside-theresult-with-cards-subject">
                            <div className="row  theResultSubjectRow">
                                <Subject theCompletedCount="4" theSubject="Maths"   setActiveCard={setActiveCard} activeCard={activeCard}/>
                                <Subject theCompletedCount="3" theSubject="Science"   setActiveCard={setActiveCard} activeCard={activeCard}/>
                                <Subject theCompletedCount="5" theSubject="English"   setActiveCard={setActiveCard} activeCard={activeCard}/>
                            </div>
                            <div className="theSelectButtonDiv">
                                <Link to={`/subject/${activeCard}`}>
                                    <button className="btn theSelectQuizBtn" disabled={activeCard === null ? "disabled": ""} onClick={() => {selectedSubject(activeCard)}}>Start Quiz 
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="12" fill="white"/>
                                            <path d="M7.33331 12H16.6666" stroke="#EDA71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 7.33325L16.6667 11.9999L12 16.6666" stroke="#EDA71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="theleaderBord-col col-md-4">
                        <div className="inside-leader-board-col">
                            <div className="row theAvatarRow">
                                <div className="theImageContFOrTheAvatar ends">
                                    <img src="https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                    <h3 className="avatarName">Sam jhonson</h3>
                                    <h6 className="completedProgress">9 / 10</h6>
                                    <span className="avatarPosition">2</span>
                                </div>
                                <div className="theImageContFOrTheAvatar mid">
                                    <img src="https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                    <h3 className="avatarName">Sam jhonson</h3>
                                    <h6 className="completedProgress">9 / 10</h6>
                                    <span className="avatarPosition">2</span>
                                </div>
                                <div className="theImageContFOrTheAvatar ends">
                                    <img src="https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                    <h3 className="avatarName">Sam jhonson</h3>
                                    <h6 className="completedProgress">9 / 10</h6>
                                    <span className="avatarPosition">2</span>
                                </div>
                            </div>
                            <div className="leader-boardSection">
                                <LeaderBoard/>
                                <LeaderBoard/>
                                <LeaderBoard/>
                                <LeaderBoard/>
                                <LeaderBoard/>
                                <LeaderBoard/>
                                <LeaderBoard/>
                                <LeaderBoard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Result
