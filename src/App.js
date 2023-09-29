import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Add from './Components/Add';
import List from './Components/List';
import Edit from './Components/Edit';
import Delete from './Components/Delete';

function App() {
  return <>
  <div>
  
  <Router>
    <Routes>
      <Route path="/add" element={<Add/>} />
      <Route path="/list" element={<List/>}/>
      <Route path="/edit" element={<Edit/>}/>
      <Route path="/delete" element={<Delete/>}/>
    </Routes>
  </Router>

  </div>

  </>
}

export default App