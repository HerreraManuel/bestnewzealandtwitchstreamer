import chiblee from './chiblee.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={chiblee} className="App-logo" alt="logo"
          style={{
            width: 200,
            height: 200,
            borderRadius: 200 / 2
          }}
       />
        <a
          className="App-link"
          href="https://www.twitch.tv/chiblee"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Chiblee
        </a>
      </header>
    </div>
  );
}

export default App;
