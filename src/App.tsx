import React from 'react';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

import AuthContext from './contex/AuthContex';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Bruno' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);

export default App;
