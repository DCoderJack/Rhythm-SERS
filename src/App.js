import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import Music from './components/Music';
import Alert from './components/Alert';

function App() {
  return (
    <>
    {/* <Router> */}
    <Navbar/>
    <Alert />

    

    <Music />
    {/* <Routes>
            <Route exact path="/" element={ <Music emotionFunction = {"fetchMusicCalm"}/> }/>
            <Route exact path="/fetchMusicCalm" element={ <Music emotionFunction = {"fetchMusicCalm"}/> }/>

            <Route exact path="/fetchMusicAngry" element={ <Music emotionFunction = {"fetchMusicAngry"}/> }/>
            <Route exact path="/fetchMusicSad" element={ <Music emotionFunction = {"fetchMusicSad"}/> }/>
            <Route exact path="/fetchMusicNeutral" element={ <Music emotionFunction = {"fetchMusicNeutral"}/> }/>
            <Route exact path="/" element={ <Music emotionFunction = {"fetchMusicHappy"}/> }/>

    </Routes>
    </Router> */}
    </>
  );
}

export default App;
