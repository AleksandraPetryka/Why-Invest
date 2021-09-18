import classes from './Card.module.css';
import { Fragment, useState } from 'react';
import Form from './Form';
import { Button } from '@material-ui/core';

function Card(props) {
  const [showCalculator, setShowCalculator] = useState(false);

  const nextAction = () => {
    setShowCalculator(true);
  };

  const valuesToCalculations = (value) => {
    const firstValue = value;
    console.log(`log: firstValue = `, firstValue);
  };

  const introduction = <div className={classes.introduction}>
    <h2>Dzień dobry!</h2>
    <p className={classes.text}>
      Hej, tu będzie jakiś mądry tekst. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Zostań z nami!
    </p>
    <div>
      <Button variant="contained" onClick={nextAction}>Next</Button>
    </div></div>;

    return (
    <Fragment>
      <section className={classes.summary}>
        {showCalculator && <Form onAddToCalculations={valuesToCalculations}/>}
        {!showCalculator && introduction}
      </section>
    </Fragment>
    );
    }

    export default Card;
