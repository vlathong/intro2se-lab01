
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
