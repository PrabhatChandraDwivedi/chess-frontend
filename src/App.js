import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tile from './Components/Tile';

function App() {
  return (
  <BrowserRouter>
<Routes>
  <Route path='/gameRoom' element={<Tile/>}/>
</Routes>
  </BrowserRouter>
  );
}

export default App;
