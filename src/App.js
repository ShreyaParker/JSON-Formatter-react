import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");
  const [error, setError] = useState(null);
  const formatData = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(inputData), null, 2);
      setError(null);
      setOutputData(formatted);
    } catch (error) {
      setError(error);
      setOutputData(error.message);
    }
  };
  const clearData = () => {
    setInputData("");
    setOutputData("");
  };

  return (
    <div className="App">
      <div className="buttons">
        <button className="button-fm" onClick={formatData}>
          Format data
        </button>
        <button className="button-cl" onClick={clearData}>
          Clear data
        </button>
      </div>
      <div className="areas">
        <textarea
          className="large-area input"
          value={inputData}
          rows="10"
          cols="60"
          placeholder="Enter JSON data"
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        ></textarea>
        <textarea
          readOnly
          className={`large-area output `}
          style={error && { color: "red" }}
          placeholder="Formatter JSON data"
          defaultValue={outputData}
        />
      </div>
    </div>
  );
}
