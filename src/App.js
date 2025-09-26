import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchEngine />
      </header>
      <footer>Coded by Anna Smirnova</footer>
    </div>
  );
}

export default App;
