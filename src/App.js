import './App.css';
import Header from "./header";
import Footer from "./footer";
import Content from './content';
import Jumbotron from './jumbotron';
import ReviewCard from './reviews';
import Contact from './contact.js';




function App() {


  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <Content/>
      <ReviewCard/>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;
