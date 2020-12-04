
import './App.css';
import Joke from './Joke';

function App() {
  return (
    <div className="App">
      <div className="jokes">
        <Joke question="Dad, did you get a haircut?" punchline="No, I got them all cut." />
        <Joke punchline="I don't trust stairs. They're always up to something." />
        <Joke question="Why don't eggs tell jokes?" punchline="They'd crack each other up." />
        <Joke question="What do you call someone with no body and no nose?" punchline="Nobody nose." />
        <Joke punchline="This graveyard looks overcrowded. People must be dying to get in." />
      </div>
    </div>
  );
}

export default App;
