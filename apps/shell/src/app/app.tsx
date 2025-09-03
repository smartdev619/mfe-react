import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';

const Product = React.lazy(() => import('products/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title='Welcome Home' />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
