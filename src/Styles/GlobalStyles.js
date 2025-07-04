import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Importing Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Rubik+Doodle+Shadow&family=Rubik+Mono+One&family=Rubik:ital,wght@0,300..900;1,300..900&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  /* Root Variables */
  :root {
    --primary-color:      rgb(25, 137, 145);
    --background-light:   #f9fbfc;
    --background-1:       rgb(245, 235, 217);
    --background-2:       rgb(202, 217, 245);
    --background-3:       rgb(220, 227, 228);
    --t-color:            #e8f0f0;
    --cta-color:          #ff6f61;
    --footer-bg:          rgb(19, 44, 47);
    --hover-color:        rgb(81, 170, 177);

    /* --secondary-color: #ff6f61;
    --background-dark: #343a40;
    --text-color: #333333;
    --navbar-color: #ffffff; */
  
    /* --bg-gradient: linear-gradient(180deg, #28a745, #1b4d3e); */
    
    .background-primary{
      background-color: var(--primary-color);
    }
    .background-1{
      background-color: var(--background-1);
    }
    .background-2{
      background-color: var(--background-2);
    }
    .background-3{
      background-color: var(--background-3);
    }
    .twhite{
      color: var(--t-color);
    }
  }

  /* General Styles */
  body {
    background-color: var(--background-light) !important;
    color: var(--text-color);
    font-family: 'Mulish', serif;
    margin: 0;
    padding: 0;
  }
.word-span{
  color: var(--primary-color);
  font-weight: bold;
}
  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  a:hover {
    color: #535bf2;
  }

  /* Heading Styles */
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Bricolage Grotesque", sans-serif !important;
    font-optical-sizing: auto;
    font-style: normal;
  }

  /* Navigation styles */
  nav, nav>* {
    font-family: "Mulish", serif;
  }

  /* Donate button styles */
  .btn-div {
    position: relative !important;
    top: 0;
    overflow: hidden !important;
  }

  .donate-btn {
    position: relative;
    background-color: var(--primary-color) !important;
    border: none !important;
    outline: none !important;
    padding: 10px 30px;
    overflow: hidden;
  }

  .donate-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    /* background-color: rgba(255, 255, 255, 0.2); */
    background-color: var(--hover-color);
    opacity: 0.3;
    /* Light overlay */
    transition: 0.4s ease-in-out;
  }
  .donate-btn:hover::before {
    left: 0;
    /* Slide overlay from left to right */
  }
  .donate-btn:hover {
    background-color: var(--hover-color);
  }
  
  /* General Button Style */
  button{
    /* background-color: var(--primary-color) !important; */
  }

  /* Font family classes */
  .space-grotesk {
    font-family: "Space Grotesk", sans-serif !important;
    font-optical-sizing: auto;
    font-style: normal;
  }

  .space-mono-regular {
    font-family: "Space Mono", monospace !important;
    font-style: normal;
  }

  .space-mono-bold {
    font-family: "Space Mono", monospace !important;
    font-style: normal;
  }

  .bricolage-grotesque {
    font-family: "Bricolage Grotesque", sans-serif !important;
    font-optical-sizing: auto;
    font-variation-settings: "wdth" 100;
  }

  .rubik-mono-one-regular {
    font-family: "Rubik Mono One", monospace !important;
    font-weight: 400;
    font-style: normal;
  }

  .rubik {
    font-family: "Rubik", sans-serif !important;
    font-optical-sizing: auto;
    font-style: normal;
  }

  .rubik-doodle-shadow-regular {
    font-family: "Rubik Doodle Shadow", system-ui !important;
    font-weight: 400;
    font-style: normal;
  }

  .mulish {
    font-family: "Mulish", serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
`;

export default GlobalStyle;
