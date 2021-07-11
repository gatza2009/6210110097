import logo from './logo.svg';
import './App.css';
import WordCard from './WordClass';

const word = "MANNi"
function App() {
  return (
    <div>
      <WordCard value={word}/>
    </div>
  );
}

export default App;
