import 'bootstrap/dist/css/bootstrap.min.css'
/* import {Container} from "react-bootstrap/dist/react-bootstrap.min" */
import TopBar from './components/TopBar/TopBar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import './app.scss'
import Slider from './components/Slider/Slider'
import Form from './components/Form/Form'


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Intro/>
      <About/>
      <Slider />
      <Form />
    </div>
  );
}

export default App;
