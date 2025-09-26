import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchEngine />
      </header>
      <footer>
        Coded by Anna Smirnova and is{" "}
        <a
          href="https://github.com/HannahSmirnova/crystal-project-anna-smirnova.git"
          rel="Github"
        >
          open-sourced
        </a>
      </footer>
    </div>
  );
}

export default App;
