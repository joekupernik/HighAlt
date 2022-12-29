import './App.css';
import Header from "./header";
import Footer from "./footer";
import Content from './content';
import Jumbotron from './jumbotron';
import ReviewCard from './reviews';
import ContactForm from './contactForm';




function App() {


  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <Content/>
      <ReviewCard/>
      <ContactForm/>
      <Footer/>
    </div>

  );
}

export default App;
