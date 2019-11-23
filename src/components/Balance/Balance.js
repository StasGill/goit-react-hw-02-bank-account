import React from 'react';
import PropTypes from 'prop-types';
import style from './balanceStyle.module.css';

function Balance({ deposit, balance, withdrow }) {
  return (
    <section className={style.balanceContainer}>
      <span>
        <span role="img" aria-label="top">
          ⬆️
        </span>
        {deposit}$
      </span>
      <span>
        <span role="img" aria-label="down">
          ⬇️
        </span>
        {withdrow}$
      </span>
      <span>Balance: {balance}$</span>
    </section>
  );
}
Balance.propTypes = {
  deposit: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
  withdrow: PropTypes.number.isRequired,
};
export default Balance;
