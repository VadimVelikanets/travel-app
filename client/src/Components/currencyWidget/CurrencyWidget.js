import { useEffect, useState } from "react";
import "./CurrencyWidget.css";
import { useStore } from '../../redux/store';
function CurrencyWidget(props) {
  const { currency } = props;
  const [usd, setUsd] = useState(0);
  const [eur, setEur] = useState(0);
  const [rub, setRub] = useState(0);
  const [state] = useStore();
  useEffect(() => {
    fetch(
      `https://api.exchangeratesapi.io/latest?base=${currency}`
      )
      .then((res) => res.json())
      .then((data) => {
        data.rates.USD ? setUsd((data.rates.USD).toFixed(2)) : setUsd(1)
        data.rates.EUR ? setEur((data.rates.EUR).toFixed(2)) : setEur(1)
        data.rates.RUB ? setRub((data.rates.RUB).toFixed(2)) : setRub(1)
      });
  });

  return (
    <div className="currency-widget">
      <p className="currency-widget__title">{state.lang.ExchangeRates}</p>
      <div className="currency-widget__exchange-rates">
        <div className="currency-widget__currency">
          <img
            src={`/${currency}.svg`}
            alt={currency}
            className="currency-widget__flag"
          />
          <span>1</span>
        </div>
        <div className="currency-widget__currency">
          <img src="/USD.svg" alt="usd" className="currency-widget__flag" />
          <span>{usd}</span>
        </div>
        <div className="currency-widget__currency">
          <img src="/EUR.svg" alt="euro" className="currency-widget__flag" />
          <span>{eur}</span>
        </div>
        <div className="currency-widget__currency">
          <img src="/RUB.svg" alt="rub" className="currency-widget__flag" />
          <span>{rub}</span>
        </div>
      </div>
    </div>
  );
}

export default CurrencyWidget;
