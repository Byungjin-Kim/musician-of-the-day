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
    name: "Ludwig van Beethoven",
    genre: "Classical",
    image: "https://placehold.co/150x150" //demo img
  };

  //single music track
  // const track = {
  //   title: "Symphony No 5, 1st mov.",
  //   performer: "BJK Orchestra"
  // }; 

  // const { performer, title, url } = musicInfo; 
  const track = musicInfo[0];

  return (
    <div>
      <h1>Musician of the Day</h1>

     {/* Pass props to Components */}
      <Status message={`Here is ${track.title} to brighten your day 🎵`} />
      <MusicianCard 
        name={musician.name}
        genre={musician.genre}
        image={musician.image}
      />
      <Track performer={track.performer} url={track.url}/>
    </div>
  );
}
export default App;
