import './App.css';
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">  
          <h1>
            SheCodes Dictionary
          </h1>     
        </header>
        <main>
        <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Renata Monteiro
        </footer>
      </div>
    </div>
  );
}

