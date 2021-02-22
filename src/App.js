import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Nicholas Horton" avatar="https://randomuser.me/api/portraits/men/86.jpg" online />
      <Contact name="Alma Moreno" avatar="https://randomuser.me/api/portraits/women/64.jpg" />
      <Contact name="Gabe Armstrong" avatar="https://randomuser.me/api/portraits/men/87.jpg" online/>
    </div>
  );
}

export default App;
