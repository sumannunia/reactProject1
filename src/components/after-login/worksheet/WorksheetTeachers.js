import React from 'react'
import {useState, useEffect} from 'react';
import WhorksheetImage from './WorksheetImageCard';
import WhorksheetImageModal from './WorksheetWithModal';
import useApiCall from '../../../apicall'
import axios from 'axios';
function WorksheetTeachers() {
    const [data, isLoading, getData ] = useApiCall();
    const [infoType, setInfotyp] = useState('approved');
    const [approvedData, setApprovedData] = useState(null);
    const [modalData,  setModaldata] = useState({imgSrc: '', id: '', date: '', name: '', class: ''});
    const [inputValue, setInputValue] = useState('');
    const [radioStatus, setRaioStats] = useState('approved');
    const [reviewUpdateStatus, setReviewUpdateStatus] = useState(false)
    useEffect(() => {
        getData(`https://myiqkids.com:8443/api/get-worksheets-by-status/${infoType}`)
         console.log(data)
        setApprovedData(data)
        // console.log(approvedData)
        console.log(infoType)
            
        
    }, [infoType, isLoading]);
    const updateData = (val) => {
        // data = null;
        setInfotyp(val);
    }
    // console.log(data)
    let handereviewUpdate = (eve) => {
        setInputValue(eve.target.value);
        console.log(inputValue)
    };
    const updateReview = () => {
        let obj = {
            'comment': inputValue,
            'status':radioStatus
        };
        let apiToken = localStorage.getItem('apiToken');
        console.log(apiToken);
        setReviewUpdateStatus(true);
        console.log(obj)
        axios.post(`https://myiqkids.com:8443/api/update-worksheets-by-tutor-v1/${modalData.id}`, obj, {
            headers:{
                "content-type": "application/json",
                 apiToken
            }
        }).then(data => {
            console.log(data);
            setReviewUpdateStatus(false);
            setInputValue('');
            if(data.status == 200){
                alert("updated successfully.");
            }
        }).catch(err => {
            console.log(err);
            setReviewUpdateStatus(false);
            setInputValue('');
            alert('sorry there is an error! ', err);
        })
    }
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{modalData.name} Worksheet</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-7 col-lg-6">
                                <div className="image-card" id={modalData.id}>
                                    <img src={modalData.imgSrc} />
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-6">
                                <div className="inside-col-right">
                                    <div className="kid-detail">
                                        <div className="avatar-side">
                                            <div className="avatar">{modalData.name ?  modalData.name.slice(0,1).toUpperCase() : 'UK'}</div>
                                            <div className="name-data">
                                                <h6 className="name-kid">{modalData.name}</h6>
                                                <span className="className">{modalData.class}</span>
                                            </div>
                                        </div>
                                        <div className="date-upload">{modalData.date}</div>
                                    </div>
                                    <div className="text-area">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">Your Review</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" value={inputValue} rows="3" onChange={(event) => handereviewUpdate(event)}></textarea>
                                        </div>
                                    </div>
                                    <div className="radio-btns">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="approved" onClick={() => setRaioStats('approved')} checked/>
                                            <label className="form-check-label" htmlFor="exampleRadios1">
                                                Approve
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="unapproved" onClick={() => setRaioStats('unapproved')} />
                                            <label className="form-check-label" htmlFor="exampleRadios2">
                                                Unapprove
                                            </label>
                                        </div>
                                        
                                    </div>
                                    <div className="review-btn-div">
                                        <button className="review-btn btn" disabled={inputValue ? '' : 'disabled'} onClick={updateReview}>
                                            
                                            <div className={reviewUpdateStatus == true ? "spinner-border" : 'd-none'}></div>
                                            Save review</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    </div>
                </div>
            </div>
            <div className="tabs-section">
                <ul className="nav nav-tabs" id="tabs" role="tablist">
                    <li className="nav-item" role="presentation" onClick={() => updateData('approved')}>
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Approved Worksheets</a>
                    </li>
                    <li className="nav-item" role="presentation" onClick={() => updateData('pending')}>
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Pending Worksheets</a>
                    </li>
                    <li className="nav-item" role="presentation" onClick={() => setInfotyp('unapproved')}>
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Unapproved Worksheets</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row image-card-row">
                            {data !== null ? data.content.map(detail => {
                                return <WhorksheetImage key={detail.id} src={"https://www.myiqkids.com/worksheet-uploads/"+detail.thumbnail} />
                            }): 'Loading ... Please wait.'}
                            
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row image-card-row">
                            {data !== null ? data.content.map(detail => {
                                return <WhorksheetImageModal key={detail.id} detail={detail} src={"https://www.myiqkids.com/worksheet-uploads/"+detail.thumbnail} setModaldata={setModaldata} id={detail.id}/>
                            }): 'Loading ... Please wait.'}
                            
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="row image-card-row">
                            {data !== null ? data.content.map(detail => {
                                return <WhorksheetImage key={detail.id} src={"https://www.myiqkids.com/worksheet-uploads/"+detail.thumbnail} />
                            }): 'Loading ... Please wait.'}
                            
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default WorksheetTeachers
