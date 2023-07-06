import React from "react";
import { useState } from "react";
import axios from "axios";
import Exchangerate from "./ExchangeRate";
function CurrencyConverter() {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  // const currBTC = currencies[0]
  const [convert, setConvert] = useState("BTC");
  const [convert1, setConvert1] = useState("BTC");
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  // console.log(convert)
  console.log(convert1);
  console.log(amount)
  async function Convertcurr() {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: convert,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: convert1,
      },
      headers: {
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        "X-RapidAPI-Key":import.meta.env.VITE_RAPIDAPI_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(
        response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
      );
      setExchangeRate(
        response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
      );
      setResult(
        response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
          amount
      );
    } catch (error) {
      console.error(error);
    }
  }
  console.log(exchangeRate);
  return (
    <div className="container  md:max-w-sm max-w-none">
      <div className=" bg-slate-400 border-none mt-10  pt-10  px-3 py-5 rounded-xl ml-2 mr-3">
        <table>
          <tbody>
            <tr>
              <th>
                <td className="pr-6">Primary Currency:</td>
                <td>
                  <input
                    className="outline-none rounded-s rounded-e   md:w-36 w-24 "
                    type="number"
                    onChange={(event) => {
                      setAmount(event.target.value);
                    }}
                    name="currency-amount-1"
                    placeholder="input amount"
                    value={amount}
                  />
                </td>
                <td>
                  <select
                    name="currency-option-1"
                    className="rounded-s rounded-e"
                    value={convert}
                    onChange={(event) => {
                      setConvert(event.target.value);
                    }}
                  >
                    {currencies.map((currency) => {
                      return (
                        <>
                          <option>{currency}</option>
                        </>
                      );
                    })}
                  </select>
                </td>
              </th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>
                <td>Secondary Currency:</td>
                <td>
                  <input
                    className=" pl-1 rounded-e rounded-s outline-none cursor-pointer  md:w-36 w-24"
                    type="number"
                    name="currency-amount-2"
                    placeholder="Amount"
                    disabled={true}
                    value={result}
                  />
                </td>
                <td>
                  <select
                    name="currency-option-2 "
                    className="rounded-s rounded-e"
                    value={convert1}
                    onChange={(event) => {
                      setConvert1(event.target.value);
                    }}
                  >
                    {currencies.map((currency) => {
                      return (
                        <>
                          <option>{currency}</option>
                        </>
                      );
                    })}
                  </select>
                </td>
              </th>
            </tr>
          </tbody>
        </table>
        <button className=" ml-40 mt-8 bg-rose-200" onClick={Convertcurr}>
          Convert Currency
        </button>
        <Exchangerate exchangeRate={exchangeRate} primarycurrency={convert} secondarycurrency={convert1} />
      </div>
    </div>
  );
}

export default CurrencyConverter;
