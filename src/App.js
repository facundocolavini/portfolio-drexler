import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap/dist/react-bootstrap.min"
import TopBar from './components/TopBar/TopBar'
import './app.scss'

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Container>
        <h1>Hola mundo</h1>
      </Container>
    </div>
  );
}

export default App;
