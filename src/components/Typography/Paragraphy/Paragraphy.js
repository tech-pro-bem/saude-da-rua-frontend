import React from 'react';
import { ParagraphyStyle } from '../Typography.style';

//  PARAGRAFOS DA PAGINA
function Paragraphy({ children }) {
  return <ParagraphyStyle>{children}</ParagraphyStyle>;
}

export default Paragraphy;
