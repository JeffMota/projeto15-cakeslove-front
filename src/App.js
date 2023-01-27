import Home from './routes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './routes/SignIn';
import SignUpPage from './routes/SignUp';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/cadastro' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
