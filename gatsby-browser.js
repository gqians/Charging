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
if(window.localStorage){
	const qdsThemeColor = window.localStorage;
	const content = qdsThemeColor.getItem('qdsThemeColor')
	if(content){
		const qdsThemeColor = JSON.parse(content)
		const htmlElement = document.getElementsByTagName('html')[0]
		htmlElement.style.setProperty("--color-h",qdsThemeColor['--color-h']);
		htmlElement.style.setProperty("--color-s",qdsThemeColor['--color-s']);
		htmlElement.style.setProperty("--color-l",qdsThemeColor['--color-l']);
	}
}
deckDeckGoHighlightElement();
