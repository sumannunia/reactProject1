import React from 'react'

function WorksheetWithModal(props) {
    const setModatdats = (id, src, det) => {
        let detail = {imgSrc: src, id: id, date: det.updated_at.slice(0, 10), name: det.kid_name, class: det.kid_class}
        props.setModaldata(detail)
    }
    return (
        <>
            <div className="col-md-4 col-lg-3" data-toggle="modal" data-target="#staticBackdrop" onClick={() => setModatdats(props.id, `${props.src}`, props.detail)}>

                <div className="image-card" style={{cursor: 'pointer'}}>
                    <img src={props.src} />
                </div>
            </div>
        </>
    )
}

export default WorksheetWithModal
