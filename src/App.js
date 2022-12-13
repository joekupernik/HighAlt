import './App.css';
import Header from "./header";
import Footer from "./footer";
import Content from './content';
import Jumbotron from './jumbotron';
import ReviewCard from './reviews';




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
