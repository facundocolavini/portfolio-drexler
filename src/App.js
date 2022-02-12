import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import TopBar from './components/TopBar/TopBar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Slider from './components/Slider/Slider'
import Technologies from './components/Technologies/Technologies'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import './app.scss'



function App() {
  return (
    <div className="App">
      <TopBar/>
      <Intro/>
      <About/>
      <Slider />
      <Technologies />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
