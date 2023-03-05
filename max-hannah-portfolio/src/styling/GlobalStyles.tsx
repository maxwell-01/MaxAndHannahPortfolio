import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { fontBase, headingFont } from './fonts';
import { portfolioBlack } from './colours';

export const GlobalStyles = createGlobalStyle`
${normalize}

*, *::before, *::after {
  box-sizing: border-box;
}

input:invalid {
  box-shadow: none;
}

html,
body {
  margin: 0;
  font-family: ${headingFont};
  font-size: ${fontBase};
  color: ${portfolioBlack};
  font-weight: normal;
  line-height: 1.5;
}

// Remove default margins from user-agent stylesheet - you should be explicitly using the
// spacing scale values where margins are required
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

// Remove default heading styles - you should be using the font size scale values, and making an
// explicit decision on heading sizes based on the context they appear in, not on the header's
// semantic level
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
`;
