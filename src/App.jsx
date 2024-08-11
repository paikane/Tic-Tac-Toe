
import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initailName="Player 1" symbole="X" />
          <Player initailName="Player 2" symbole="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
