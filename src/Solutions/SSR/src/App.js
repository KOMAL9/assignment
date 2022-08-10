import React from 'react';

import { AppContainer, HeaderContainer } from './components';
import { Button } from "./Button";
// import { appState } from "./store"

export const AppContext = React.createContext();

function App() {

  const [name, setName] = React.useState('Anuj');

  return (
    <AppContext.Provider value={{ name, setName }} displayName="App State">
      <AppContainer>
        <HeaderContainer>
          Server Side Rendering App
        </HeaderContainer>
        <Button />
      </AppContainer>
    </AppContext.Provider>
  );
}

export default App;