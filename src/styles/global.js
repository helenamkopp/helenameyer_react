import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

* {
padding:0;
margin:0;
vertical-align:baseline;
list-style:none;
text-decoration: none;
border:0
}

body {
  min-height: 100vh; /*importante p manter o footer la em baixo*/
  display: grid; /*importante p manter o footer la em baixo*/
}


`