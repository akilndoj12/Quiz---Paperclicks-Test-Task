import { FaPhoneAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useStore } from './zustand/zustang.js';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';
import './App.css';

function App() {
  const { pages } = useStore();

  return (
    <div className='app'>
      <div className='header'>
        <div className='container header__container'>
          <div className='logo'>
            <h2>
              K<span>/</span>NET<span>/</span>C
            </h2>
            <h3>moving people</h3>
          </div>
          <div className='contacts'>
            <p>
              Talk to a Consolidation Specialist <FaPhoneAlt /> (800) 888-8888
            </p>
          </div>
        </div>
      </div>
      <div className='body'>
        {pages === 0 && <Page1 />}
        {pages === 1 && <Page2 />}
        {pages === 2 && <Page3 />}
      </div>
      <div className='footer'>
        <div className='container'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ullam molestias esse in
            suscipit reiciendis alias! Quam, asperiores, vel repellendus fugit dolorum, placeat
            minima distinctio veniam eos facilis omnis nostrum nisi ratione eveniet ipsa deserunt
            adipisci quo mollitia id accusamus minus quos! Totam rem architecto, nulla officia
            consectetur exercitationem accusantium.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ullam molestias esse in
            suscipit reiciendis alias! Quam, asperiores, vel repellendus fugit dolorum, placeat
            minima distinctio veniam eos facilis omnis nostrum nisi ratione eveniet ipsa deserunt
            adipisci quo mollitia id accusamus minus quos! Totam rem architecto, nulla officia
            consectetur exercitationem accusantium.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ullam molestias esse in
            suscipit reiciendis alias! Quam, asperiores, vel repellendus fugit dolorum, placeat
            minima distinctio veniam eos facilis omnis nostrum nisi ratione eveniet ipsa deserunt
            adipisci quo mollitia id accusamus minus quos! Totam rem architecto, nulla officia
            consectetur exercitationem accusantium.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ullam molestias esse in
            suscipit reiciendis alias! Quam, asperiores, vel repellendus fugit dolorum, placeat
            minima distinctio veniam eos facilis omnis nostrum nisi ratione eveniet ipsa deserunt
            adipisci quo mollitia id accusamus minus quos! Totam rem architecto, nulla officia
            consectetur exercitationem accusantium.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
