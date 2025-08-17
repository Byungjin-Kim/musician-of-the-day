// No need to import React in React 17+
import Status from './Components/Status';
import MusicianCard from './Components/MusicianCard';
import Track from './Components/Track';
import musicInfo from './data/musicInfo.json';
import './App.css'

// App skeleton
function App() {

  // Prepare data 
  const musician = {
    complete_name: "Ludwig van Beethoven",
    genre: "Early Romantic",
    image: "https://placehold.co/150x150" //demo img
  };
  
  const track = musicInfo[0];

  return (
    <div>
      <h1>Musician of the Day</h1>

     {/* Pass props to Components */}
      <MusicianCard 
        name={musician.complete_name}
        genre={musician.genre}
        image={musician.image}
        composerId={145}
      />
      <Status message={`Here is ${track.title} to brighten your day 🎵`} />
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
