import { Route, Routes } from 'react-router-dom';
import * as LC from './components';
import * as Pages from './pages';

const App = () => (
  <Routes>
    <Route path="/" element={<LC.Layout />}>
      <Route index element={<Pages.Discover />} />
      <Route path="/songs/:songId" element={<Pages.SongDetails />} />
      <Route path="/artists/:id" element={<Pages.ArtistDetails />} />
      <Route path="/around-you" element={<Pages.AroundYou />} />
      <Route path="/top-charts" element={<Pages.TopCharts />} />
      <Route path="/top-artists" element={<Pages.TopArtists />} />
    </Route>
  </Routes>
);

export default App;
