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

const data = [
    {
        id: 0,
        qsn: 'Susie needs 13 balloons. She already has 4 balloons. How many more balloons does she need?',
        options: [
             "albert",
             "ruby",
             "alex",
             "sam"
        ],
        ans: "alex"
    },
    {
        id: 1,
        qsn: 'Susie needs 13 balloons. She already has 100 balloons. How many more balloons does she need?',
        options: [
             "albert1",
             "ruby1",
             "alex1",
             "sam1"
        ],
        ans: "alex1"
    },
    {
        id: 2,
        qsn: 'Susie needs 13 balloons. She already has 200 balloons. How many more balloons does she need?',
        options: [
             "albert2",
             "ruby2",
             "alex2",
             "sam2"
        ],
        ans: "alex2"
    },
    {
        id: 3,
        qsn: 'Susie needs 13 balloons. She already has 300 balloons. How many more balloons does she need?',
        options: [
             "albert3",
             "ruby3",
             "alex3",
             "sam3"
        ],
        ans: "alex3"
    }
]
let answersGeneratedArr = [];
const theActualAnswer = [];
data.map((detail, index) => {
    answersGeneratedArr.push(index);
    theActualAnswer.push(detail.ans);
});

const Questions = (props) => {
     var endDate = new Date().toISOString().slice(0,10);
   var d = new Date().setMinutes(new Date().getMinutes() + 20);
const [times, setTimes] = useState({endDate:endDate, d:d})
    console.log(useParams());
    const [activeAnswer, setActiveAnswer] = useState(null);
    const [questionCounter, setQuestionCounter] = useState(0);
    const [showSubmit, setShowSubmit] = useState(false);
    const [answerCollection, setanswerCollection] = useState(answersGeneratedArr);
    // props.setData(data);
    
    // console.log(theActualAnswer);
    return (
        <>
        {/* {correctAnswer.length > 1 ? <ResultPage correctAnswer={correctAnswer} detail={data} /> : <div>
                <BlueBarCounter />
                <QuestionsText activeAnswer={activeAnswer} setActiveAnswer={setActiveAnswer} detail={data} qsnNo={questionCounter} answerCollection={answerCollection} setanswerCollection={setanswerCollection} answersGeneratedArr={answersGeneratedArr} />
                <NextPrevSubmitSerction activeAnswer={activeAnswer} setActiveAnswer={setActiveAnswer} qsnNo={questionCounter} setQuestionCounter={setQuestionCounter} detail={data} showSubmit={showSubmit} setShowSubmit={setShowSubmit} answerCollection={answerCollection} setanswerCollection={setanswerCollection} theActualAnswer={theActualAnswer} correctAnswer={props.correctAnswer} setCorrectAnswer={props.setCorrectAnswer} />
                
            </div>


            
        } */}
        <div>
                <BlueBarCounter  times={times} setTime={setTimes}/>
                <QuestionsText activeAnswer={activeAnswer} setActiveAnswer={setActiveAnswer} detail={data} qsnNo={questionCounter} answerCollection={answerCollection} setanswerCollection={setanswerCollection} answersGeneratedArr={answersGeneratedArr} />
                <NextPrevSubmitSerction activeAnswer={activeAnswer} setActiveAnswer={setActiveAnswer} qsnNo={questionCounter} setQuestionCounter={setQuestionCounter} detail={data} showSubmit={showSubmit} setShowSubmit={setShowSubmit} answerCollection={answerCollection} setanswerCollection={setanswerCollection} theActualAnswer={theActualAnswer} correctAnswer={props.correctAnswer} setCorrectAnswer={props.setCorrectAnswer} />
                
            </div>
        {/* <Router>
            <Switch>
                <Route path="/subject/:name" children={ <div>
                    <BlueBarCounter />
                    <QuestionsText activeAnswer={activeAnswer} setActiveAnswer={setActiveAnswer} detail={data} qsnNo={questionCounter} answerCollection={answerCollection} setanswerCollection={setanswerCollection} answersGeneratedArr={answersGeneratedArr} />
                    <NextPrevSubmitSerction activeAnswer={activeAnswer} setActiveAnswer={setActiveAnswer} qsnNo={questionCounter} setQuestionCounter={setQuestionCounter} detail={data} showSubmit={showSubmit} setShowSubmit={setShowSubmit} answerCollection={answerCollection} setanswerCollection={setanswerCollection} theActualAnswer={theActualAnswer} correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer} />
                    
                </div>}></Route>
                <Route path="/subject/:result">
                    <ResultPage correctAnswer={correctAnswer} detail={data} />
                </Route>
            </Switch>
        </Router> */}
        </>
    )
};
export default Questions
