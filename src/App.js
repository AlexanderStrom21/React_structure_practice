import axios from "axios";
import "./App.css";

//data will be the string we send from our server
const apiCall = () => {
  axios.get("http://localhost:8080").then((data) => {
    console.log(data);
  });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Make API Call</button>
      </header>
    </div>
  );
}
export default App;
