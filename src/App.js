import './App.css';
import Header from "./header";
import Footer from "./footer";
import Content from './content';
import Jumbotron from './jumbotron';
import ReviewCard from './reviews';
// in future I need to add the contact form at bottom of app. 




function App() {


  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <Content/>
      <ReviewCard/>
      <Footer/>
    </div>

  );
}

export default App;
