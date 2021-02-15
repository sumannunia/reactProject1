import React from 'react'

function NextPrevSubmit(props) {
    console.log(props.activeAnswer)
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
                    <button className="btn nextBtn" disabled={props.activeAnswer === null ? 'disabled' : ""}>
                        <span className="d-none d-md-block" >Next Question</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="white"/>
                            <path d="M7.33337 12H16.6667" stroke="#EDA71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 7.33337L16.6667 12L12 16.6667" stroke="#EDA71D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>


                        </button>
                </div>
            </div>
        </div>
    )
}

export default NextPrevSubmit
