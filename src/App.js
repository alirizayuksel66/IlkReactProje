import { createElement, useState } from 'react';
import './tailwind.css'
import Button from "./components/Button"
import Tab from "./components/Tab"

function App() {
  const aile = ['Ali Rıza', 'Yasemin', 'Cevat']
  const [activeTab, setActiveTab] = useState()
  /*const ali= createElement('h1', null, 'Ali Rıza Yüksel')
  const ailee = createElement('ul', null, aile.map( todo => createElement('li', null, todo))) 

  return createElement('main', {
    className: 'test',
    id: 'main'
  }, ali,ailee)
  */
  const stillendir= {color: 'blue', backgroundColor:'green'}
  const Uyari = () => { alert('HEY!')}
  const name = 'Özgül'

  return  (
    <main id="main" className="test">
      <div style={{padding: 20}}>
        <button onClick={() => setActiveTab(2)}>
          Aktif Tabı Değiştir
        </button>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title="Profil">1. Tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2. Tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. Tab</Tab.Panel>
        </Tab>
      </div>

      <div style={{padding: 20}}>
        <Button variant="danger">Buton Örneği</Button>
        <Button variant="success">Buton Örneği</Button>
        <Button variant="info">Buton Örneği</Button>
        <Button> Buton Örneği </Button>
      </div>
      <p tabIndex="4" style={{color: 'pink', backgroundColor:'purple'}}>Ali Rıza Yüksel</p>
      <p tabIndex="3" style={stillendir}>Ali Rıza Yüksel</p>
      <label htmlFor="odak" tabIndex="2" onClick={Uyari}>Arama</label>
      <input type="text" id="odak" tabIndex="1"/>
      <ul>
        {name.toUpperCase()}
        {aile.map(todo=>(
          <li key={todo}>
            {todo}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
