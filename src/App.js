import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Vocab</header>
        <main>
          <Dictionary defaultKeyword="beach" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Sonique Middleton, it is{" "}
            <a href="https://github.com/soniqmidd/dictionary-project-react">
              open-sourced on Github
            </a>{" "}
            and is{" "}
            <a href="https://app.netlify.com/sites/amazing-moonbeam-31a2ba/overview">
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
