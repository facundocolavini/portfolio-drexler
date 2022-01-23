import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap/dist/react-bootstrap.min"
import TopBar from './components/TopBar/TopBar'
import Intro from './components/Intro/Intro'
import './app.scss'

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Intro />
      
    </div>
  );
}

export default App;
