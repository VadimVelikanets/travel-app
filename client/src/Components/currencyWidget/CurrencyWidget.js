import { useEffect, useState } from "react";
import "./CurrencyWidget.css";

function CurrencyWidget(props) {
  const { currency } = props;
  const [usd, setUsd] = useState(0);
  const [eur, setEur] = useState(0);
  const [rur, setRur] = useState(0);
  const [usdEur, setUsdEur] = useState(0);
  const [usdRub, setUsdRub] = useState(0);

  useEffect(() => {
    fetch(
      "https://openexchangerates.org/api/latest.json?app_id=867a61a2d5384a4db512f7a19193f46f"
    )
      .then((res) => res.json())
      .then((data) => {
        setUsdEur(data.rates.EUR);
        setUsdRub(data.rates.RUB);
        setUsd((1 / data.rates[currency]).toFixed(1));
        setEur((usd * usdEur).toFixed(1));
        setRur((usd * usdRub).toFixed(1));
      });
  });

  return (
    <div className='currency-widget'>
      <p className='currency-widget__title'>Exchange Rates:</p>
      <div className='currency-widget__exchange-rates'>
        <div className='currency-widget__currency'>
          <img
            src={`${currency}.svg`}
            alt={currency}
            className='currency-widget__flag'
          />
          <span>1</span>
        </div>
        <div className='currency-widget__currency'>
          <img src='/usd.svg' alt='usd' className='currency-widget__flag' />
          <span>{usd}</span>
        </div>
        <div className='currency-widget__currency'>
          <img src='/euro.svg' alt='euro' className='currency-widget__flag' />
          <span>{eur}</span>
        </div>
        <div className='currency-widget__currency'>
          <img src='/rur.svg' alt='rur' className='currency-widget__flag' />
          <span>{rur}</span>
        </div>
      </div>
    </div>
  );
}

export default CurrencyWidget;
