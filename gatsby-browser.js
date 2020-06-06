// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"
import "./src/styles/global.css"
import  config from './src/utils/config'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
Object.entries(config.theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
});
deckDeckGoHighlightElement();
