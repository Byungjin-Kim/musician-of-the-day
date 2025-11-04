// No need to import React in React 17+
import { useState } from 'react';
import Status from './Components/Status';
import MusicianCard from './Components/MusicianCard';
import Track from './Components/Track';
import musicInfo from './data/musicInfo.json';
import './App.css'

// App skeleton
function App() {

   // 1. Pick a random track when the app loads
   // 1-2. Notes: Avoid duplicates when re-picking; handle empty array just in case.
   // 2. Pick a new random track when the button is clicked (option)

  // check if musicInfo (JSON) is a valid array and has at least one item. (the data is an array and not empty)
  const hasData = Array.isArray(musicInfo) && musicInfo.length > 0;

  // manage state for current index of track
  // initially displays track 0 (first song), later to be replaced with a button!
  const [currentIndex, setCurrentIndex] = useState(0); // first JSON Data

  // Get current track based on index
  const track = hasData ? musicInfo[currentIndex] : null;

  // Function to select a random index
  function pickRandomIndex (length, exclude) {
    if (length <= 1) return exclude; // can't change if data < 1

    let next = exclude;
    while (next === exclude) {
      next = Math.floor(Math.random() * length);
    }
    return next;
  }

  // button click handler: change to a random index
  function handlePickRandom () {
    if (!hasData) return;
    if (musicInfo.length <= 1) return;

    console.log(currentIndex);
    const next = pickRandomIndex(musicInfo.length, currentIndex);
    setCurrentIndex(next);
  }



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
