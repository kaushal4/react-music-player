import Player from "./components/player"
import Songs from "./components/songs"
import "./styles/app.scss"
function App() {
  return (
    <div>
      <h1>Music player</h1>
      <Songs />
      <Player />
      
    </div>
  );
}

export default App;
