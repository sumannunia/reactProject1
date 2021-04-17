import React from 'react'

function WorksheetImageCard(props) {
    return (
        <div className="col-md-4 col-lg-3">

            <div className="image-card">
                <img src={props.src} />
            </div>
        </div>
    )
}

export default WorksheetImageCard
