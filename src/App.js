import logo from './logo.svg';
import './App.css';
import {Header} from './header-footer/header';
import {IndexBody} from './components/IndexBody';
import {Footer} from './header-footer/footer';
function App() {
  return (<>
      <Header></Header>
      <IndexBody></IndexBody>
      <Footer></Footer>
    </>
  );
}

export default App;
