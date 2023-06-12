import axios from 'axios';
import React, { useEffect, useState } from 'react';

import img1 from './img1.jpg';

import './App.css';

const App = () => {
  const [message, setMessage] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/hello')
      .then(response => { return response.json() })
      .then(function(data) { setMessage(data) });

    axios
      .get('/list')
      .then(response => { setData(response.data) });

  }, []);
  // proxy에서 localhost:8080을 선언했으므로 경로 지정만 해주면 됨


  return (
    <div className='App'>
      <header>
        <img src={img1} style={{width: '200px', height: '200px'}} alt='img1' />
        <h1>SpringBoot /hello로부터 받은 데이터 출력</h1>
        <ul style={{listStyle: 'none'}}>
          {
            message.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
        <hr />

        <section>
          <h2>SpringBoot /list로부터 받은 데이터 출력</h2>
          <ul style={{listStyle: 'none'}}>
          {
            data.map((item, index) => <li key={index}>{item.name} / {item.addr} / {item.age}</li>)
          }
        </ul>

        </section>
      </header>
    </div>
  );
};

export default App;