import { useState } from "react";
import logo from "./logo.svg";

export default function Logo() {
  const [error, setError] = useState(false);

  return (
    <hgroup>
      <h1 className="">
        <a href='/'>
          <img src={logo} alt="" id="logo"
                onLoad={() => setError(false)}
                onError={() => setError(true)} />
          {error &&
          <div>Справочник Ташкента<span id="wordmark">Sprav.uz</span></div>}
        </a>
      </h1>
    </hgroup>
  );
}
