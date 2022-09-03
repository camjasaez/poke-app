import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import Pokedex from './pages/Pokedex';
import Legendary from './pages/Legendary';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="legendary" element={<Legendary />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
