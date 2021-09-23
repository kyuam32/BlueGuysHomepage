import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    min-width: 600px;
    font-size: 8px;
    -webkit-text-size-adjust:none;
  }

  @media all and (min-width: 1024px) and (max-width: 1919px) {
    html {
      font-size: calc(8px * 0.8);
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    html {
      font-size: calc(8px * 0.7);
    }
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    html {
      font-size: calc(8px * 0.6);

    }
  }

  @media (max-width: 479px) {
    html {
      font-size: calc(8px * 0.5);
    }
  }

  body {
    font-family: 'serif', 'sans-serif', monospace;
    white-space: nowrap;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    font-family: -apple-system, 'serif', 'sans-serif', monospace;
  }
`;

export default GlobalStyle;