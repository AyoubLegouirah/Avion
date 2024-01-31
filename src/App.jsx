// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Home2 from './pages/Home/Home2';
import BookNow from './pages/BookNow/BookNow';
import Avion_detail from './pages/Avion_detail/Avion_detail';
import data from './avion1.json'; 
import Tarif from './pages/Tarif/Tarif';
import A_propos from './pages/A_Propos/A_propos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<A_propos />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/tarif" element={<Tarif />} />
        <Route
          path="/avion_detail/:index"
          element={<Avion_detail avionsDeChasseModernes={data.avionsDeChasseModernes} />}
        />
      </Routes>
    </Router>
  );
};

export default App;




