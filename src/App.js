import Home from './routes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './routes/SignIn';
import SignUpPage from './routes/SignUp';
import AuthProvider from './contexts/AuthContext';
import PagesContextProvider from './contexts/PagesContext';
import Catalogo from './routes/Catalogo';

function App() {
  return (
    <AuthProvider>
      <PagesContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/cadastro' element={<SignUpPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/catalogo' element={<Catalogo />} />
          </Routes>
        </BrowserRouter>
      </PagesContextProvider>
    </AuthProvider>
  );
}

export default App;
