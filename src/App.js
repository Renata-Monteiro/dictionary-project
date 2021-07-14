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
          <p>
            A React project by <a href="https://github.com/Renata-Monteiro" target="_blank" rel="noreferrer"> Renata Monteiro</a>
              </p>     
        </header>
        <div className="main">
          <main>
            <Dictionary defaultKeyword="dictionary"/>
          </main>
        </div>
        
      </div>
    </div>
  );
}

