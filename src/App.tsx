import React from 'react';

import GlobalStyle from './styles/global';
// como ainda nao tem rotas, importa a Pagina SignIn direto no App.tsx
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import { AuthProvider } from './hooks/auth';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
