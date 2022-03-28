import React from 'react';

import AddRecord from './components/addRecord'
import Card from './components/cards'




function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <AddRecord></AddRecord>
      <Card></Card>
    </div>
  );
}

export default Home;
