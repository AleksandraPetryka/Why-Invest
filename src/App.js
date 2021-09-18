import classes from './App.module.css';
import { Fragment } from 'react';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Card />
      </main>
    </Fragment>
  );
}

export default App;
