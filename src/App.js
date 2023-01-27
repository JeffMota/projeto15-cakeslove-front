// import Home from './routes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import LoginPage from './screens/SignIn';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;