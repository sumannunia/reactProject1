import React from 'react'

const QuestionsText = (props) => {

    
    return (
        <div className="container">
            <div className="insideTheQuestionContainer">
                <h4 className="theQuestionText">Question 3</h4>
                <p className="thequestionForThePage">
                    Susie needs 13 balloons. She already has 4 balloons. 
                        How many more balloons does she need?
                </p>
                <div className="options">
                    <div className="row theOptionsRow">
                        <div className="col-6 option-col" onClick={() => props.setActiveAnswer("a")}>
                            <div  className={props.activeAnswer === "a" ? "inside-option-col active" : "inside-option-col"}>
                                <div className="theOptionName">a</div>
                                <div className="theOptionAnswer">albert</div>
                            </div>
                        </div>
                        <div className="col-6 option-col" onClick={() => props.setActiveAnswer("b")}>
                            <div className={props.activeAnswer === "b" ? "inside-option-col active" : "inside-option-col"}>
                                <div className="theOptionName">b</div>
                                <div className="theOptionAnswer">albert</div>
                            </div>
                        </div>
                        <div className="col-6 option-col" onClick={() => props.setActiveAnswer("c")}>
                            <div className={props.activeAnswer === "c" ? "inside-option-col active" : "inside-option-col"}>
                                <div className="theOptionName">c</div>
                                <div className="theOptionAnswer">albert</div>
                            </div>
                        </div>
                        <div className="col-6 option-col" onClick={() => props.setActiveAnswer("d")}>
                            <div className={props.activeAnswer === "d" ? "inside-option-col active" : "inside-option-col"}>
                                <div className="theOptionName">d</div>
                                <div className="theOptionAnswer">albert</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionsText
