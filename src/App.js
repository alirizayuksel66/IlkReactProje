import logom from "./logo.svg"
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";
import './style.css'

function App() {
  return (
    <div className="App">
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">Ali Rıza Yüksel</Title>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      {process.env.NODE_ENV == 'production' &&(
        <>
        Merhaba
        <img src={logom}></img>
        </>
      )}
      Ali Rıza
      <Bootstrap />
    </div>
  );
}

export default App;
