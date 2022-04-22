
import './App.css';
import Row from './components/Row';
import requests from './request'

function App() {
  return (
    <div className="app">

    <h1>Netflix clone</h1>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />

    </div>
  );
}


export default App;

 

  
