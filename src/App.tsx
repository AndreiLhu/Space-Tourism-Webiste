import React from 'react';
import Crew from './Pages/Crew/Crew';
import Destination from './Pages/Destination/Destination';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router';
import Technology from './Pages/Technology/Technology';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
