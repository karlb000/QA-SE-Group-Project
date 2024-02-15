import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

type ApiData = {
  data: string;
};

function App() {
  const [data, setData] = useState<ApiData | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!data) return <div>Loading...</div>;
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Base App</h1>
      <div className="card">
        {data && <p>Data from API: {JSON.stringify(data.data)}</p>}
      </div>
    </>
  );
}

export default App;
