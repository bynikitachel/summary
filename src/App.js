import './App.css';
import Person from './components/Person/Person';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contacts';
import { useState } from 'react';

function App() {
  const [isVisible, setVisible] = useState(false);

  let now = new Date();
  alert(now);

  return (
    <div className="App">
      <div className="container">
        <div className='content'>
          <Skills clickButton={() => setVisible(!isVisible)} isVisible={isVisible} />
          <Person />
        </div>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
