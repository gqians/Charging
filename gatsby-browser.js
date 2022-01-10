// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"
import "./src/styles/global.css"
// import Blobity from "blobity"
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
// const threeScript = document.createElement('script');
// threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/96/three.min.js';
// document.body.appendChild(threeScript);
// const script = document.createElement('script');
// script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/96/three.min.js';
// document.body.appendChild(script);
{/* <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/three.js/96/three.min.js"></script>
			<script type="text/javascript" src="https://www.vantajs.com/dist/vanta.birds.min.js"></script> */}

// const options = { 
// 			color: 'rgb(180, 180, 180)',
// 			invert: true,
// 			opacity: 0.1
// 		};
// new Blobity(options);

deckDeckGoHighlightElement();
