import {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Header} from './header-footer/header';
import SigninHeader from './header-footer/signup-header';
import {IndexBody} from './components/IndexBody';
import {Footer} from './header-footer/footer';

import {Mainpage} from './components/after-login/Mainpage';
import Questions from './components/after-login/Questions'
function App() {
  let loginStateValue = localStorage.getItem('loginStatus');
  const [loginState, setLoginState] = useState(loginStateValue)

  return (<>
      {loginState ? <><SigninHeader childData = {setLoginState}/> 
        <Questions/>
      </>: <>
        <SigninHeader childData = {setLoginState}/>
      {/* <Header></Header> */}
      <IndexBody></IndexBody>
      <Footer></Footer>
      </>}
      {/* {loginState ? <><SigninHeader childData = {setLoginState}/> 
        <Mainpage/>
      </>: <>
        <SigninHeader childData = {setLoginState}/>
     
      <IndexBody></IndexBody>
      <Footer></Footer>
      </>} */}
      
    </>
  );
};

export default App;
