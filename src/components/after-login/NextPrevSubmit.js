import React,{useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
function NextPrevSubmit(props) {
    const nextQuestionFunction = () => {
        // console.log(props.qsnNo)
        if(props.qsnNo < props.detail.length - 1 ){
            props.setQuestionCounter(props.qsnNo + 1);
            props.setActiveAnswer(null);
        }else{
            props.setShowSubmit(true);

        }
    };
    let correctAns = 0;
    let wrongAns = 0;
    const submitAnswer = async () => {
        console.log(props.qsnNo);
        
        props.theActualAnswer.forEach((element, index) => {
            if(element == props.answerCollection[index]){
                console.log(true)
                correctAns += 1; 
            }else{
                wrongAns += 1;
            }
        });
        console.log(correctAns);
        console.log(wrongAns);
        await props.setCorrectAnswer([correctAns, wrongAns]);
        await console.log(props.correctAnswer)
        // props.setCorrectAnswer([correctAns, wrongAns]);
    };
    console.log(props.correctAnswer)
    // console.log(props.correctAnswer)
    // console.log(props.activeAnswer)
    return (
        <div className="container">
            <div className="insidePrevNextSubContainer">
                <div className="prevsection">
                    <button className="btn prevBtn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle r="12" transform="matrix(-1 0 0 1 12 12)" fill="white"/>
                            <path d="M16.6667 12H7.33333" stroke="#EDA71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 7.33337L7.33333 12L12 16.6667" stroke="#EDA71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="d-none d-md-block">Previous Question</span>

                        </button>
                </div>
                <div className="progressForQuestions">
                    <div className="thequestionInfo">few more questions left</div>
                    <div className="theProgressBarForQuestions">
                        <span></span>
                    </div>
                </div>
                <div className="nextsection">
                    {!props.showSubmit ? <NextBtn activeAnswer={props.activeAnswer} nextQuestionFunction={nextQuestionFunction}/> : <SubmitBtn activeAnswer={props.activeAnswer} nextQuestionFunction={submitAnswer} />}
                    
                </div>
            </div>
        </div>
    )
}
const NextBtn = (props) => {
    return ( <> 
        <button className="btn nextBtn" disabled={props.activeAnswer === null ? 'disabled' : ""} onClick={props.nextQuestionFunction}>
            <span className="d-none d-md-block" >Next Question</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="white"/>
                <path d="M7.33337 12H16.6667" stroke="#EDA71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7.33337L16.6667 12L12 16.6667" stroke="#EDA71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    </>)
}
const SubmitBtn = (props) => {
    return ( <>
    <Link to="/result">
        <button className="btn nextBtn" disabled={props.activeAnswer === null ? 'disabled' : ""} onClick={props.nextQuestionFunction}>
            <span className="d-none d-md-block" >Submit</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="white"/>
                <path d="M7.33337 12H16.6667" stroke="#EDA71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7.33337L16.6667 12L12 16.6667" stroke="#EDA71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    </Link>
     </>)
}
export default NextPrevSubmit
