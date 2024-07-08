import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Inputs from './components/Inputs';
import RecordsData from './components/RecordsData';

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <Header />
      <Inputs setData={setData} data={data} />
      <RecordsData setData={setData} data={data} />
    </>
  );
}

export default App;
