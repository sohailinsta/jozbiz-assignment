import './App.css';
import Final from './Components/Final';
import Footer from './Components/Footer';
import Header from './Components/Header';
import How from './Components/How';
import Look from './Components/Look';
import Pick from './Components/Pick';
import Social from './Components/Social';

function App() {
  return (
    <div className="App">
      <Header />
      <Look/>
      <Pick/>
      <How/>
      <Social/>
      <Footer/>
      <Final/>
    </div>
  );
}

export default App;
