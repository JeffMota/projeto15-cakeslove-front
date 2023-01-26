import Home from './routes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
