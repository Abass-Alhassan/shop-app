import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from './components/funcComponent';
//boostrap css

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SHOP FOR ME APP</h1>
        <AddProduct/>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
