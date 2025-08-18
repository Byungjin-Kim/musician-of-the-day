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
    <>
      <header className="App-header">
        <h1 className='headline headline--serif'>Musician of the Day</h1>
        <div className="status-wrapper">
          <Status name={track.name}/>
        </div>
      </header>

      <main>
        <div className="content-wrapper">
          <div className="content-left">
            <MusicianCard composerId={track.composerId} /> 
          </div>

          <div className="content-right">
            <Track 
              title={track.title} 
              conductor = {track.conductor} 
              performer={track.performer} 
              url={track.url}
            />
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
