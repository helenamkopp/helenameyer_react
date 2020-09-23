import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/global';

import Header from './components/Header'

export default () => {

  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }

    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);


  return (
    <div>
      < GlobalStyle />
      < Header black={blackHeader} />
    </div>
  );
}
