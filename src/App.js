import "./App.scss";
import Board from "./components/board";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>ShuffleBoard UI</h1>
      <Board />
    </div>
  );
}

export default App;
