import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
// import {Header} from './header-footer/header';
import SigninHeader from './header-footer/signup-header';
import {IndexBody} from './components/IndexBody';
import {Footer} from './header-footer/footer';

import {Mainpage} from './components/after-login/Mainpage';
import Questions from './components/after-login/Questions';
import NoMatch from './components/NotFound';
import Result from './components/after-login/Result';
function App() {
  let loginStateValue = localStorage.getItem('loginStatus');
  const [loginState, setLoginState] = useState(loginStateValue)
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [data, setData] = useState([])
  return (<>
    <Router>
      <SigninHeader childData = {setLoginState} />
      <Switch>
        <Route exact path="/">
          
          <IndexBody></IndexBody>
          <Footer></Footer>
          {/* {loginState ? <><SigninHeader childData = {setLoginState}/> 
            <Questions/>
          </>: <>
            <SigninHeader childData = {setLoginState}/>
         
          <IndexBody></IndexBody>
          <Footer></Footer>
          </>} */}
        </Route>
        <Route path="/quiz-options" >
          
          <Mainpage />
        </Route>
        <Route path="/subject/:name" children={<Questions correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer} data={data} setData={setData} />} >
          {/* <Questions></Questions> */}
        </Route>
        <Route path="/result">
          {/* <Questions></Questions> */}
          <Result correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer} data={data} setData={setData} />
        </Route>
        <Route path="*">
          <NoMatch />
          <Footer></Footer>
        </Route>
      </Switch>
    </Router> 
    </>
  );
};

export default App;
