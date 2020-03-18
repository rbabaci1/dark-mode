import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Charts from './components/Charts';
import Navbar from './components/Navbar';

import './styles.scss';

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=7&page=1&sparkline=true'
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
