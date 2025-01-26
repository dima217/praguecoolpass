// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UnderConstruction } from './pages/underConstruction';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;