import React from 'react';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default () => {

  return (
    <div>
      < GlobalStyle />
        < Header />
        < MainContent />
        < Footer />

    </div>
  );
}
