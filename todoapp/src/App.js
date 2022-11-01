import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import MainContent from './layouts/MainContent';

import { useState } from 'react';
import FormCreate from './components/FormCreate';
import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <div className="main-content">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/add-new" element={<FormCreate />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
