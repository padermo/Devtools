import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Document from '../Document/Document';
import Resources from '../Resources/Resources';

function App() {
  return (
    <div className='container-app'>
      <Header />
      <Routes>
        <Route exact path='/' element={<About />} />
        <Route exact path='/documents' element={<Document />} />
        <Route exact path='/resources' element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App