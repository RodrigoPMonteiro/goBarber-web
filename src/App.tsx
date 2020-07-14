import React from 'react';

import GlobalStyle from './styles/global';
// como ainda nao tem rotas, importa a Pagina SignIn direto no App.tsx
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
