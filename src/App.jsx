import React from 'react';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header/>
      <Button>Sort By date</Button>
      <Button>View More</Button>
      <Button>De Dour</Button>
      <Button>Love You Programming</Button>
    </div>
  );
};

export default App;