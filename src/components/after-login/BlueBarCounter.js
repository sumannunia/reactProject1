import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const BlueBarCounter = (props) => {
    let correctAns = 0;
    let wrongAns = 0;
    var endTime = new Date(props.times.d).toLocaleTimeString();
    // console.log(endDate, endTime)  
    var countDownDate = new Date("" + props.times.endDate + " " + endTime).getTime();
    const calculateTimeLeft = () => {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // console.log(minutes, seconds)
        let timeLeft = {};
            
        if (distance > 0) {
            timeLeft = {
                min: minutes,
                sec: seconds,
                distance: distance
            }
        }else{
            timeLeft = {
                min: "00",
                sec: "00",
                distance: distance
            }
        }
        return timeLeft
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    let history = useHistory();
  useEffect(() => {
    //   console.log(timeLeft)
    let theInterval = setInterval(() => {
        calculateTimeLeft()
      setTimeLeft(calculateTimeLeft());
      if(timeLeft.distance < 0) {clearInterval(theInterval); 
        alert('Session timed out.')
        history.push("/result");
        const submitAnswer = async () => {
        // console.log(props.qsnNo);
        
        props.theActualAnswer.forEach((element, index) => {
            if(element == props.answerCollection[index]){
                console.log(true)
                correctAns += 1; 
            }else{
                wrongAns += 1;
            }
        });
       
        await props.setCorrectAnswer([correctAns, wrongAns]);
        await console.log(props.correctAnswer)
        // props.setCorrectAnswer([correctAns, wrongAns]);
    };
    submitAnswer();
    };
    }, 1000);
    // console.log('hello inside ')
    return () => clearInterval(theInterval)
  }, [timeLeft]);


    return (
        <div className="blueBarWithCounter">
            <div className="container">
                <div className="subjectTitle">
                    <div className="subjectTitleHeading">
                        <h4>Maths</h4>
                    </div>
                </div>
                <div className="timerContainer">
                    <div className="theMinCounter">
                        <h3 className="minHand">{timeLeft.min}</h3>
                        <span className="minText">{timeLeft.distance < 0 ? "" : "mins"}</span>
                    </div>
                    <div className="theSecCounter">
                        <h3 className="secHand">{timeLeft.sec}</h3>
                        <span className="minText">{timeLeft.distance < 0 ? "" : "secs"}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlueBarCounter
