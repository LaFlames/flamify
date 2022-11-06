import { Route, Routes } from 'react-router-dom';
import * as LC from './components';
import * as Pages from './pages';

const App = () => (
  <Routes>
    <Route path="/" element={<LC.Layout />}>
      <Route index element={<Pages.Discover />} />
    </Route>
  </Routes>
);

export default App;
