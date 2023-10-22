import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
import JobDetails from './components/job-details'
import NotFound from './components/notFound'
import Home from './components/home'
import Navbar from "./components/navbar";
import SuccessPage from "./components/success-page";
import ContactUs from "./components/contact-us";
function App() {

  // arrow functions have different scope for this keyword than normal functions, component instance
  // in forms :- onSubmit handles both, 'enter' key and submit btn click
  // never alter the state outside the setstate , its a bad practice. array could be updated using spread operator
  // let ninjas = [...this.state.ninjas , ninjas];
  // this.setState({ninjas : ninjas})

  return (
    <div className="App">
         <Router>
         <Navbar />
           <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path ='/job-details/:id' element = {<JobDetails/>}/>
                <Route path='*' element = {<NotFound/>}/>
                <Route path='/success-page' element = {<SuccessPage/>}/>
                <Route path="/contact-us" element = {<ContactUs/>}/>
           </Routes>
            
        </Router>
    </div>
  );
}

export default App;
