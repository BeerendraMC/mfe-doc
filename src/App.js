import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DocContainer from './components/DocContainer';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import AngularDoc from './components/AngularDoc';
import PageNotFound from './components/PageNotFound';
import './App.css';

const App = () => {
  return (
    <Router basename="mfe-doc">
      <div className="d-flex flex-column">
        <TopNav />
        <div className="app_body d-flex flex-column">
          <main>
            <Routes>
              <Route exact path="/" element={<DocContainer />} />
              <Route path="angular-guide" element={<AngularDoc />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
