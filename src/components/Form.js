import React, { useState } from 'react';
import classes from './Form.module.css';
import { Button, FormControl, TextField } from '@material-ui/core';
import { calculate } from './calculations';

// const isEmpty = value => value.trim() === '';
const FORM_FIELDS = {
  startingAmount: 'startingAmount',
  monthlyInvest: 'monthlyInvest',
  yearsNumber: 'yearsNumber',
  yearlyReturn: 'yearlyReturn',
  incomeTax: 'incomeTax',
};

const initialFormState = {
  [FORM_FIELDS.startingAmount]: '',
  [FORM_FIELDS.monthlyInvest]: '',
  [FORM_FIELDS.yearsNumber]: '',
  [FORM_FIELDS.yearlyReturn]: '',
  [FORM_FIELDS.incomeTax]: '',
};

const Form = (props) => {

  const [form, setForm] = useState(initialFormState);
  const [result, setResult] = useState(null);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    // setTimeout(() => {
    //   console.log(`log: form = `, form);
    // }, 500);
  };

  // Input do wstawienia
  // 1. Starting amount
  // 2. Monthly invest amount
  // 3. Yearly return of investment
  // 4. Income tax (defaultValue = 19%)
  // 5. Radio button:
  // 5.A Ending Amount
  // 5.B Monthly Income

  // JEŚLI 5 PUSTE i RESZTA FULL
  // Pokaż:
  // 1. Monthly income
  // 2. Ending amount

  // *JEŚLI WSZYSTKO FULL POZA JEDNYM POLEM
  // *POKAŻ TO POLE

  const submitHandler = (event) => {
    console.log(`log: form = `, form);
    event.preventDefault();

    console.log(`log: calculate(form) = `, calculate(form));
    setResult(calculate(form));
  };


  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <FormControl fullWidth className={classes.margin}>
            <TextField
              name={FORM_FIELDS.startingAmount}
              value={form[FORM_FIELDS.startingAmount]}
              onChange={changeHandler}
              label="1. Starting amount"
              placeholder="Amount"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin}>
            <TextField
              name={FORM_FIELDS.monthlyInvest}
              value={form[FORM_FIELDS.monthlyInvest]}
              onChange={changeHandler}
              label="2. Monthly invest amount"
              placeholder="Amount"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin}>
            <TextField
              name={FORM_FIELDS.yearsNumber}
              value={form[FORM_FIELDS.yearsNumber]}
              onChange={changeHandler}
              label="3. How many years you wanna invest"
              placeholder="Amount"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin}>
            <TextField
              name={FORM_FIELDS.yearlyReturn}
              value={form[FORM_FIELDS.yearlyReturn]}
              onChange={changeHandler}
              label="4. Yearly return of investment"
              placeholder="Amount"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin}>
            <TextField
              name={FORM_FIELDS.incomeTax}
              value={form[FORM_FIELDS.incomeTax]}
              onChange={changeHandler}
              label="5. Income Tax"
              placeholder="Amount"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </div>
      </form>
      {result && <div className={classes.result}>
        <p>Ending Amount: {result.endingAmount}</p>
        <p>Ending Monthly Income: {result.endingMonthlyIncome}</p>
      </div>}
    </div>
  );
};

export default Form;