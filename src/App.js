import "./App.css";
import WeatherWidget from "./components/weatherWidget/WeatherWidget";
import CurrencyWidget from "./components/currencyWidget/CurrencyWidget";
import LogInModalWindow from "./components/logInModalWindow/LogInModalWindow";
import RegisterModalWindow from "./components/registerModalWindow/RegisterModalWindow";
function App() {
  return (
    <div className="App">
      <WeatherWidget cityName="Minsk" />
      <CurrencyWidget currency="BYN" />
      <LogInModalWindow />
      <RegisterModalWindow />
    </div>
  );
}

export default App;
