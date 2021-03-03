import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import BlueBarCounter from './BlueBarCounter';
import '../../css/question-page.css';
import QuestionsText from './QuestionsText';
import NextPrevSubmitSerction from './NextPrevSubmit';
// import ResultPage from './Result';
import useApiCall from '../../apicall';



const Questions = (props) => {
let subjectCategory = useParams();
// console.log(subjectCategory.name)
let userId = localStorage.getItem('id')
const [data, isLoading, getData ] = useApiCall(`http://13.233.126.86:8443/api/get-question/${userId}/${subjectCategory.name}`);
// console.log(data)
let answersGeneratedArr = [];
const theActualAnswer = [];
useEffect(() => {
    getData(`http://13.233.126.86:8443/api/get-question/${userId}/${subjectCategory.name}`);
    // console.log(data)
}, [isLoading])
if(isLoading == false){

    data.map((detail, index) => {
        answersGeneratedArr.push(index);
        theActualAnswer.push(detail.ans);
    });
}
// console.log(theActualAnswer);
    var endDate = new Date().toISOString().slice(0,10);
    var d = new Date().setMinutes(new Date().getMinutes() + 1);
    const [times, setTimes] = useState({endDate:endDate, d:d})
    // console.log(useParams());
    const [activeAnswer, setActiveAnswer] = useState(null);
    const [questionCounter, setQuestionCounter] = useState(0);
    const [showSubmit, setShowSubmit] = useState(false);
    const [answerCollection, setanswerCollection] = useState(answersGeneratedArr);
    
    return (
        <>
       
        <div>
                {isLoading == true  ? 'loading' : <>
                    <BlueBarCounter  times={times} setTime={setTimes} answerCollection={answerCollection} setanswerCollection={setanswerCollection} theActualAnswer={theActualAnswer} correctAnswer={props.correctAnswer} setCorrectAnswer={props.setCorrectAnswer}/>
                <QuestionsText activeAnswer={activeAnswer} setActiveAnswer={setActiveAnswer} detail={data} qsnNo={questionCounter} answerCollection={answerCollection} setanswerCollection={setanswerCollection} answersGeneratedArr={answersGeneratedArr} />
                <NextPrevSubmitSerction activeAnswer={activeAnswer} setActiveAnswer={setActiveAnswer} qsnNo={questionCounter} setQuestionCounter={setQuestionCounter} detail={data} showSubmit={showSubmit} setShowSubmit={setShowSubmit} answerCollection={answerCollection} setanswerCollection={setanswerCollection} theActualAnswer={theActualAnswer} correctAnswer={props.correctAnswer} setCorrectAnswer={props.setCorrectAnswer} />
                </>}
                
            </div>
        
        </>
    )
};
export default Questions;
