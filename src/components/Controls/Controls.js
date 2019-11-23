import React from 'react';
import PropTypes from 'prop-types';
import style from './controlsStyle.module.css';

function Controls({ depositOn, withdrawOn, onChange }) {
  return (
    <section className={style.controls}>
      <input onChange={onChange} type="number" name="amount" />
      <button onClick={depositOn} type="button">
        Deposit
      </button>
      <button onClick={withdrawOn} type="button">
        Withdraw
      </button>
    </section>
  );
}
Controls.propTypes = {
  depositOn: PropTypes.func.isRequired,
  withdrawOn: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Controls;
