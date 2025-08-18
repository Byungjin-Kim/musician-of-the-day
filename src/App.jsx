// No need to import React in React 17+
import Status from './Components/Status';
import MusicianCard from './Components/MusicianCard';
import Track from './Components/Track';
import musicInfo from './data/musicInfo.json';
import './App.css'

// App skeleton
function App() {

  const track = musicInfo[0]; // JSON Data

  return (
    <div>
      <h1>Musician of the Day</h1>
      <MusicianCard composerId={track.composerId} /> 
      <Status name={track.name}/>
      <Track 
        title={track.title} 
        conductor = {track.conductor} 
        performer={track.performer} 
        url={track.url}
        />
    </div>
  );
}
export default App;
