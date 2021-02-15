import React, {useState, useEffect} from 'react'
import BlueBarCounter from './BlueBarCounter';
import '../../css/question-page.css';
import QuestionsText from './QuestionsText';
import NextPrevSubmitSerction from './NextPrevSubmit';
const Questions = () => {
    const [activeAnswer, setActiveAnswer] = useState(null);
    return (
        <div>
            <BlueBarCounter />
            <QuestionsText activeAnswer={activeAnswer} setActiveAnswer={setActiveAnswer}/>
            <NextPrevSubmitSerction activeAnswer={activeAnswer} setActiveAnswer={setActiveAnswer}/>
        </div>
    )
};
export default Questions
