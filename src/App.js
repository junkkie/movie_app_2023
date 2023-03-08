import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Navigation from './components/Navigation';
import About from './routes/About';
import Home from './routes/Home';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} /> {/* path='/'는 보통 홈화면을 의미 */}
        <Route path='/about' element={<About />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;