import React, {useState, useEffect} from 'react'

var endDate = new Date().toISOString().slice(0,10);
    var d = new Date().setMinutes(new Date().getMinutes() + 20);
const BlueBarCounter = () => {
    // const [time, setTime] = useState({min: "00", sec: "00"});

    
        
        // console.log(new Date(d).toLocaleTimeString())
    var endTime = new Date(d).toLocaleTimeString();
    // console.log(endDate, endTime)  
   
    var countDownDate = new Date("" + endDate + " " + endTime).getTime();
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

  useEffect(() => {
    //   console.log(timeLeft)
    let theInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    if(timeLeft.distance < 0) clearInterval(theInterval);
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
