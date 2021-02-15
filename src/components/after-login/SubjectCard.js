import React from 'react'
import '../../css/card.css'
const SubjectCard = (prop) => {

    return (
        <div className="col-md-4 col-lg-4 col-xl-3 thesubjectCard" onClick={(e) =>{prop.setActiveCard(prop.theSubject)}}>
            <div className={prop.activeCard === prop.theSubject ? 'indidetheSubJectcard activeCard' : "indidetheSubJectcard"}>
                <div className={prop.activeCard === prop.theSubject ? 'theSmallActiveCircle activeCard' : "theSmallActiveCircle"}></div>
                <div className="theInfoContainer">
                    <div className="theprogress-div-container">
                        <span>Completed</span>
                        <span className="theCompleted-data"><span className="compltedRatio">{prop.theCompletedCount} </span>/ <span className="totalCompletedRatio">10</span></span>
                    </div>
                    <div className="theBarContainer">
                        <span className="progress-bar-span" style={{width: (parseInt(prop.theCompletedCount) * 10) + "%"}}></span>
                    </div>
                    <div>
                        <h3 className="subjectOfCard">{prop.theSubject}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectCard
