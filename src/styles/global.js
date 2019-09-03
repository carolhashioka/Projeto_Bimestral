import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Hepta+Slab&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 14px 'Hepta Slab', serif;
    -webkit-font-smoothing: antialiased !important;
  }
    html, body, #root {
    height: 100%;
  };
  `;
