import 'bootstrap/dist/css/bootstrap.min.css'
/* import {Container} from "react-bootstrap/dist/react-bootstrap.min" */
import TopBar from './components/TopBar/TopBar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Slider from './components/Slider/Slider'
import Technologies from './components/Technologies/Technologies'
<<<<<<< HEAD
=======
import Footer from './components/Footer/Footer'
>>>>>>> ac0801c7a11b4013e01b5a389f164bbb38022737
import './app.scss'


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Intro/>
      <About/>
      <Slider />
      <Technologies/>
      <Footer/>
    </div>
  );
}

export default App;
