import logom from "./logo.svg"
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";
import Tailwind from "./Tailwind";
import './tailwind.css'
import './style.scss'
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
      <p className="ali">
        Ali Rıza
        <span> Yüksel </span>
      </p>
      Ali Rıza
      <Bootstrap />
      <Tailwind />
    </div>
  );
}

export default App;
