import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AvisoLegal from './pages/AvisoLegal';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aviso-legal" element={<AvisoLegal />} />
      <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      <Route path="/politica-cookies" element={<PoliticaCookies />} />
    </Routes>
  );
}

export default App;
