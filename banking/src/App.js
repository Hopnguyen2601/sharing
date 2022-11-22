import formatNumber from 'format-number';
import { useSelector, useDispatch } from 'react-redux';

import { withdrawMoney } from './redux/actions';

import './App.css';

function App(state, props) {
  let dispatch = useDispatch();
  const total = useSelector((state) => state.totalAmount);
  const username = useSelector((state) => state.usename);

  const handleWithdrawMoney = (e) => {
    const amount = e.target.dataset.amount;
    dispatch(withdrawMoney(amount));
  };

  return (
    <div className="App">
      <img
        className="App__userpic"
        src={'https://image.ibb.co/nC8vGp/girl.png'}
        alt="photographer"
      />
      <p className="App__username">Hello, {username}! </p>
      <div className="App__amount">
        {formatNumber({ prefix: '$' })(total)}
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <button data-amount="10" onClick={handleWithdrawMoney}>
          WITHDRAW $10
        </button>
        <button data-amount="5" onClick={handleWithdrawMoney}>
          WITHDRAW $5
        </button>
      </section>

      <p className="App__giveaway">Give away all your cash to charity</p>
    </div>
  );
}

export default App;
