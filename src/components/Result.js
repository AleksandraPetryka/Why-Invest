import React, { useEffect, useRef } from 'react';
import classes from './Result.module.css';

const Result = (props) => {
  const resultRef = useRef();

  const numberFormat = (number) => {
    const result = number.toLocaleString();
    return result;
  };

  useEffect(() => {
    resultRef.current.scrollIntoView();
  }, []);

  return (
    <div ref={resultRef} className={classes.result}>
      <p>Ending Amount: {numberFormat(props.result.endingAmount)}</p>
      <p>Ending Monthly Income: {numberFormat(props.result.endingMonthlyIncome)}</p>
    </div>
  );
};

export default Result;