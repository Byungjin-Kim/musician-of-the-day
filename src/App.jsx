import Status from './Components/Status';
import MusicianCard from './Components/MusicianCard';
import TrackList from './Components/TrackList';
import './App.css'

function App() {
  return (
    <div>
      <h1>Musician of the Day</h1>
      <Status />
      <MusicianCard />
      <TrackList />
    </div>
  );
}

export default App;
