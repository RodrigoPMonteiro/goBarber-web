import React from 'react';

import GlobalStyle from './styles/global';
// como ainda nao tem rotas, importa a Pagina SignIn direto no App.tsx
import SignIn from './pages/SignIn';


const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
)

export default App;
