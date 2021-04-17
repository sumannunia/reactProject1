import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
// import React from 'react'
import '../../css/main-page.css'
import {BlueBar} from './BlueBar';
import SubjectCard from './SubjectCard'
import {useEffect} from 'react';
import '../../css/bluebar.css'
export const Mainpage = () => {
  
    const [activeCard, setActiveCard] = React.useState(null);
    
    useEffect(() => {
        console.log(activeCard)
        
    }, [activeCard]);
    const selectedSubject = (activeCard) =>{
        console.log(activeCard);
    }
    let bluebartext = 'Select your quiz'
    return (
        <div>
            <BlueBar  bluebartext={bluebartext}/>
            <div className='container thecardcontainer'>
                <div className="row thCardsRow" >
                    <SubjectCard theCompletedCount="6" theSubject="Maths"   setActiveCard={setActiveCard} activeCard={activeCard}></SubjectCard>
                    <SubjectCard theCompletedCount="8" theSubject="Science"  setActiveCard={setActiveCard} activeCard={activeCard}></SubjectCard>
                    <SubjectCard theCompletedCount="5" theSubject="English"  setActiveCard={setActiveCard} activeCard={activeCard}></SubjectCard>
                    <SubjectCard theCompletedCount="4" theSubject="General Knowledge"  setActiveCard={setActiveCard} activeCard={activeCard}></SubjectCard>
                    <SubjectCard theCompletedCount="4" theSubject="Puzzle"  setActiveCard={setActiveCard} activeCard={activeCard}></SubjectCard>
                    <SubjectCard theCompletedCount="10" theSubject="Geography"  setActiveCard={setActiveCard} activeCard={activeCard}></SubjectCard>
                    <SubjectCard theCompletedCount="5" theSubject="Nature"  setActiveCard={setActiveCard} activeCard={activeCard}></SubjectCard>
                    <SubjectCard theCompletedCount="7" theSubject="Movies & Show"  setActiveCard={setActiveCard} activeCard={activeCard}></SubjectCard>
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
        </div>
    )
};
