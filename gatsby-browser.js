// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"
import "./src/styles/global.css"
// import Blobity from "blobity"
import  config from './src/utils/config'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
export const onClientEntry = () => {
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
}
export const onRouteUpdate = (args, pluginOptions) => {
  const token = "1402e55e74034ea7bf9c551253147779";

  if(!token || typeof token != 'string') {
    throw Error('gatsby-plugin-cloudflare-web-analytics: No token provided in gatsby-config.js');
  }
  
  const head = document.head;
  const script = document.createElement('script');
  script.id = 'cloudflare-web-analytics'
  script.defer = true;
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.setAttribute('data-cf-beacon', `{"token": "${token}"}`);

  const existingScript = head.querySelector(`#${script.id}`);
  if(existingScript) {
    head.removeChild(existingScript)
  }

  head.appendChild(script);
}

deckDeckGoHighlightElement();
