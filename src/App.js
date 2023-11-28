import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Vocab</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Sonique Middleton</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
