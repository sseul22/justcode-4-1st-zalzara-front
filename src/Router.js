import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import ShopCart from './pages/ShopCart/ShopCart';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/shop-cart" element={<ShopCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
