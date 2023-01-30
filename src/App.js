import Home from './routes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './routes/SignIn';
import SignUpPage from './routes/SignUp';
import AuthProvider from './contexts/AuthContext';
import PagesContextProvider, { PagesContext } from './contexts/PagesContext';
import Catalogo from './routes/Catalogo';
import CarrinhoTela from './routes/Carrinho';
import UserPage from './routes/UserPage';
import Entrega from './routes/Entrega';
import ConcluidoR from './routes/ConcluidoR';
import ConcluidoE from './routes/ConlcuidoE';
import AdmPage from './routes/AdmPage';

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
            <Route path='/confirme-pedido' element={<CarrinhoTela />} />
            <Route path='/user-page' element={<UserPage />} />
            <Route path='/entrega' element={<Entrega />} />
            <Route path='/concluidor' element={<ConcluidoR />} />
            <Route path='/concluidoe' element={<ConcluidoE />} />
            <Route path='/adm-page' element={<AdmPage />} />
          </Routes>
        </BrowserRouter>
      </PagesContextProvider>
    </AuthProvider>
  );
}

export default App;
