import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import '../../../css/worksheets.css';
import {BlueBar} from '../BlueBar';
import WorksheetTabs from './WorksheetsTabs';
import WorksheetTeachers from './WorksheetTeachers';
import useApiCall from '../../../apicall'
function Worksheet() {
    let user = localStorage.getItem('userType');
    const [userType, setUserType] = useState(user);
    const [data, isLoading, getData ] = useApiCall();
    const [approvedData, setApprovedData] = useState(null);
    const [file, setFIle] = useState(null);
    const [fileInfo, setFileInfo] = useState(true);
    const [spinner, setSpinner] = useState(false)
    const [uploadProgress, setUploadPogress] = useState(0)
    let bluebartext = "Browse our worksheets below that are designed to assist children";
    console.log(userType);
    useEffect(() => {
        let appData = getData(`https://myiqkids.com:8443/api/get-worksheets-by-status/approved`)
        
    }, []);
    // console.log(data)
    if(isLoading == false){
        console.log(data);
    }

    let handelFileChange = (e) =>{
        console.log(e.target.files[0]);
        setFIle(e.target.files[0]);
        setFileInfo(true)
    }
    let uploadImage = async ()=>{
        // console.log('hello')
        if(file == null){
            console.log('no file');
            setFileInfo(false)
        }else{
            setSpinner(true);
            console.log(file);
            setFileInfo(true)
            let formData = new FormData();
            formData.append('file', file);
            let userId = localStorage.getItem('id');
            let apiToken = localStorage.getItem('apiToken');
            // let response = await fetch(`https://www.myiqkids.com:8443/api/post-worksheets/${userId}`,{
            //     headers:{
            //         'apiToken': apiToken
            //     },
            //     method:'POST',
            //     body: formData
            // });
            console.log(apiToken)
            let options= {
                onUploadProgress: (progressEvent) =>{
                    const {loaded, total} = progressEvent;
                    let percet = Math.floor(loaded * 100 / total);
                    console.log(percet, ' %', ' | ', loaded, ' kb, ' , total,"kb")
                    setUploadPogress(percet);
                }
            }
            axios.post(`https://www.myiqkids.com:8443/api/post-worksheets/${userId}`, formData, options,  {
                headers:{
                    'apiToken': apiToken
                },
                
            }).then(res => {
                console.log(res);
                if(res.status == 200){
                    alert('uploaded successfully');
                    setUploadPogress(0);
                }
                setSpinner(false);
            }).catch(err =>{
                console.log(err);
                setSpinner(false);
                alert(err);
                setUploadPogress(0);
            })
            
              }
    }
    return (
        <>

            <div className="modal fade" id="uploadModal" tabIndex="-1" aria-labelledby="uploadModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="uploadModalLabel">Upload tour worksheet</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                   <div className="upload-input-div">
                       <input type="file" className="upload-input" onChange={(event) => handelFileChange(event)}/>
                   </div>
                   <div className="file-message-box">
                       {fileInfo == true ? '' :  'Sorry please upload a file to continue'}
                   </div>
                   <div className="progressbar" style={{width: uploadProgress + '%'}}>
                       {uploadProgress > 0 ? uploadProgress + ' %' : '' }
                   </div>
                   <div className="submit-btn-div">
                       <button className="submit-btn btn" onClick={uploadImage} disabled={spinner == false ? "" : 'disabled'}>
                           <div className={spinner == false ? "spinner-border d-none" : 'spinner-border'}></div>
                            Upload worksheet</button>
                   </div>
                </div>
                
                </div>
            </div>
            </div>
            <BlueBar bluebartext={bluebartext} />
            <div className="container">
                <div className={userType == 'user' ? "div-for-upload" : 'd-none'}>
                    <h6 className="the-date-text">My worksheets</h6>
                    <button type="button" className="btn uploadBtn" data-toggle="modal" data-target="#uploadModal">
                        <span className="d-block mr-2">+</span> Upload
                    </button>
                </div>
                <div className={userType == 'teacher' ? "datepicker-div" : 'd-none'}>
                    <h6 className="the-date-text">Worksheets uploadedby kids</h6>
                    <div className="form-group mb-0">
                        <label htmlFor="exampleFormControlInput1">Filter by date</label>
                        <input type="date" className="form-control date-input"   placeholder="Filter by date"/>
                    </div>
                </div>
                {userType == 'teacher' ? <WorksheetTeachers /> : <WorksheetTabs approvedData = {approvedData}/>}
                
            </div>
        </>
    )
}

export default Worksheet
