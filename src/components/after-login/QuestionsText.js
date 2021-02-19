import React from 'react'

const QuestionsText = (props) => {
    // console.log(props.detail)
    let x= props.detail.filter(data => {
            return data.id === props.qsnNo;
        });
        let arrForNo = ["a", 'b', 'c', 'd'];  
        // console.log(props.answerCollection[1]); 
        
       
        const updateAnswer = (value) => {
            props.answersGeneratedArr[props.qsnNo] = value
            props.setActiveAnswer(value)
            props.setanswerCollection(props.answersGeneratedArr)
            console.log(props.answerCollection)

        }
    return (
        <div className="container">
            <div className="insideTheQuestionContainer">
                <h4 className="theQuestionText">Question {props.qsnNo + 1}</h4>
                <p className="thequestionForThePage">
                    {x[0].qsn}
                </p>
                <div className="options">
                    <div className="row theOptionsRow">
                        { 
                        x[0].options.map((option, index) => {
                            return <TheOption key={index} opt={option} setactiveanswer={props.setActiveAnswer} activeAns={props.activeAnswer} chars={arrForNo[index]} updateAnswer={updateAnswer} />
                        })
                    }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

let TheOption = (val) => {
    return (
        <>
            <div className="col-6 option-col" onClick={() => val.updateAnswer(val.opt)}>
                <div  className={val.activeAns === val.opt ? "inside-option-col active" : "inside-option-col"}>
                    <div className="theOptionName">{val.chars}</div>
                    <div className="theOptionAnswer">{val.opt}</div>
                </div>
            </div>
        </>
    )
}

export default QuestionsText
