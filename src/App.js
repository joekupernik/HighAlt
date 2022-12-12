import './App.css';
import Header from "./header";
import Footer from "./footer";
import Content from './content';
import Jumbotron from './jumbotron';



function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <Content/>
      <Footer/>
    </div>

  );
}

export default App;
