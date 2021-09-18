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

  const introduction = <div>
    <h2>Jestem Formem!</h2>
    <p>
      Hej, tu będzie jakiś mądry tekst.
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
