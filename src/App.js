import React from 'react';
import { CNPJSite } from './styles/CNPJSite';
import { CNPJContainer } from './styles/CNPJContainer';
import { CNPJInput } from './components/CNPJInput';


function App() {

  return (
    <CNPJSite>
      <CNPJContainer>
        <CNPJInput />
      </CNPJContainer>
    </CNPJSite>
  );
}

export default App;


