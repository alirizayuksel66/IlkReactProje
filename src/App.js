import logom from "./logo.svg"

function App() {
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      Ali Rıza
      <img src={logom}></img>
    </div>
  );
}

export default App;
