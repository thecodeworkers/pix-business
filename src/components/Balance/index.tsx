import React, { FC, useEffect, useState } from 'react';
import './styles.scss';
import { connect } from 'react-redux';

const Balance: FC<any> = ({ wallet }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotalBalance = () => {
      const { wallets } = wallet;
      const totals: Array<number> = [];
      let count = 0;

      for(let wallet of wallets) {
        totals[count] = wallet.balances.length ? wallet.balances[0].amount : 0;
        count++;
      }
  
      const total = totals.reduce((a: any, b: any) => a + b, 0);

      setTotal(total);
    }

    getTotalBalance();
    return () => setTotal(0);
  }, []);
  
  return (
    <div className="_balance">
      <p className="_title">Total</p>
      <h1 className="_amount">{`$${total}`}</h1>
    </div>
  )
}

const mapStateToProps = ({ wallet }: any) => ({ wallet })

export default connect(mapStateToProps)(Balance);
