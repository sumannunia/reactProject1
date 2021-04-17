import React from 'react'
import {useState, useEffect} from 'react';
import WhorksheetImage from './WorksheetImageCard';
import useApiCall from '../../../apicall'


function WorksheetsTabs(props) {

    const [data, isLoading, getData ] = useApiCall();
    const [infoType, setInfotyp] = useState('approved');
    const [approvedData, setApprovedData] = useState(null);
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
    return (
        <div className="tabs-section">
            <ul className="nav nav-tabs" id="tabs" role="tablist">
                <li className="nav-item" role="presentation" onClick={() => updateData('approved')}>
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Approved Worksheets</a>
                </li>
                <li className="nav-item" role="presentation" onClick={() => updateData('pending')}>
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Pending Worksheets</a>
                </li>
                {/* <li className="nav-item" role="presentation" onClick={() => setInfotyp('unapproved')}>
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Unapproved Worksheets</a>
                </li> */}
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
                            return <WhorksheetImage key={detail.id} src={"https://www.myiqkids.com/worksheet-uploads/"+detail.thumbnail} />
                        }): 'Loading ... Please wait.'}
                        
                    </div>
                </div>
                {/* <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="row image-card-row">
                        {data !== null ? data.content.map(detail => {
                            return <WhorksheetImage key={detail.id} src={"https://www.myiqkids.com/worksheet-uploads/"+detail.thumbnail} />
                        }): 'Loading ... Please wait.'}
                        
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default WorksheetsTabs
