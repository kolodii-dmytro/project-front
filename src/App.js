import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'

import AppRouter from './AppRouter'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
