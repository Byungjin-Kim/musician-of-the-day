// No need to import React in React 17+
import Status from './Components/Status';
import MusicianCard from './Components/MusicianCard';
import Track from './Components/Track';
import './App.css'

// App skeleton
function App() {

  // Prepare data 
  const musician = {
    name: "Ludwig van Beethoven",
    genre: "Classical",
    image: "https://placehold.co/150x150" //demo img
  };

  //single music track
  const track = {
    title: "Symphony No 5, 1st mov.",
    performer: "BJK Orchestra"
  }; 

  return (
    <div>
      <h1>Musician of the Day</h1>

     {/* Pass props to Components */}
      <Status message="Here are 3 tracks to brighten your day 🎵"/>
      <MusicianCard 
        name={musician.name}
        genre={musician.genre}
        image={musician.image}
      />
      <Track title={track.title} performer={track.performer}/>
    </div>
  );
}
export default App;
