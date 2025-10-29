// No need to import React in React 17+
import { useState } from 'react';
import Status from './Components/Status';
import MusicianCard from './Components/MusicianCard';
import Track from './Components/Track';
import musicInfo from './data/musicInfo.json';
import './App.css'

// App skeleton
function App() {

  const track = musicInfo[0]; // JSON Data
  // check if musicInfo (JSON) is a valid array and has at least one item.
  const hashData = Array.isArray(musicInfo) && musicInfo.length > 0;

  // 1. Pick a random track when the app loads
  // 1-1. GOAL: Show exactly one random track from musicInfo when the app loads.
  // 1-2. Notes: Avoid duplicates when re-picking; handle empty array just in case.

  // 2. Pick a new random track when the button is clicked (option)

  return (
    <>
      <div className="App">
        <header className="App-header">
            <h1 className='headline--serif'>Musician of the Day</h1>
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
      </div>
    </>
  );
}
export default App;
