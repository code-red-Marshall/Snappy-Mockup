import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetailsPage from './components/ProductDetailsPage';
import MarketplacePage from './components/MarketplacePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketplacePage />} />
      <Route path="/product/vantage-active-weathershield-jacket" element={<ProductDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
