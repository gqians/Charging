(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{GTFa:function(t,e,r){"use strict";r("R48M"),Object.defineProperty(e,"__esModule",{value:!0}),e.ReactCusdis=void 0;var a=r("q1tI"),n=r("Galn");e.ReactCusdis=function(t){var e=a.useRef(null),r=t.attrs.host||"https://cusdis.com";return n.useScript("".concat(r,"/js/cusdis.es.js")),n.useScript(t.lang?"".concat(r,"/js/widget/lang/").concat(t.lang,".js"):""),a.useLayoutEffect((function(){var t=window.renderCusdis;t&&t(e.current)}),[t.attrs.appId,t.attrs.host,t.attrs.pageId,t.attrs.pageTitle,t.attrs.pageUrl,t.lang]),a.createElement(a.Fragment,null,a.createElement("div",{id:"cusdis_thread","data-host":r,"data-page-id":t.attrs.pageId,"data-app-id":t.attrs.appId,"data-page-title":t.attrs.pageTitle,"data-page-url":t.attrs.pageUrl,"data-theme":t.attrs.theme,style:t.style,ref:e}))}},Galn:function(t,e,r){"use strict";var a=r("J4zp");r("R48M"),Object.defineProperty(e,"__esModule",{value:!0}),e.useScript=void 0;var n=r("q1tI");e.useScript=function(t){var e=n.useState(t?"loading":"idle"),r=a(e,2),l=r[0],o=r[1];return n.useEffect((function(){if(t){var e=document.querySelector('script[src="'.concat(t,'"]'));if(e)o(e.getAttribute("data-status"));else{(e=document.createElement("script")).src=t,e.async=!0,e.setAttribute("data-status","loading"),document.body.appendChild(e);var r=function(t){e.setAttribute("data-status","load"===t.type?"ready":"error")};e.addEventListener("load",r),e.addEventListener("error",r)}var a=function(t){o("load"===t.type?"ready":"error")};return e.addEventListener("load",a),e.addEventListener("error",a),function(){e&&(e.removeEventListener("load",a),e.removeEventListener("error",a))}}o("idle")}),[t]),l}},J4zp:function(t,e,r){var a=r("wTVA"),n=r("m0LI"),l=r("ZhPi"),o=r("wkBT");t.exports=function(t,e){return a(t)||n(t,e)||l(t,e)||o()}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}},ZhPi:function(t,e,r){var a=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}},ditz:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",(function(){return d}));r("E5k/");var a=r("q1tI"),n=r.n(a),l=r("Wbzz"),o=(r("gMRi"),r("6uTu")),i=r("K2qn"),s=r("p3AD"),c=r("xU4a"),u=r.n(c);r("GTFa");e.default=function(t){var e=t.data,r=t.pageContext,a=t.location;console.log(r);var c=e.markdownRemark,d=e.site.siteMetadata.title,m=r.previous,p=r.next;return n.a.createElement(o.a,{location:a,title:d},n.a.createElement(i.a,{title:c.frontmatter.title,description:c.frontmatter.description||c.excerpt}),n.a.createElement("article",{className:u.a.article},n.a.createElement("header",null,n.a.createElement("h1",{style:{marginTop:Object(s.a)(1),marginBottom:0},className:u.a.title},c.frontmatter.title),n.a.createElement("p",{style:Object.assign({},Object(s.b)(-.2),{display:"block",marginBottom:Object(s.a)(1)}),className:u.a.time},"发布于",c.frontmatter.date)),n.a.createElement("section",{dangerouslySetInnerHTML:{__html:c.html}}),n.a.createElement("hr",{style:{marginBottom:Object(s.a)(1)},className:u.a.hr}),n.a.createElement("footer",null)),n.a.createElement("nav",null,n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none"},className:u.a.ul},n.a.createElement("li",null,m&&n.a.createElement(l.Link,{to:m.fields.slug,rel:"prev"},"← ",m.frontmatter.title)),n.a.createElement("li",null,p&&n.a.createElement(l.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →")))),n.a.createElement("div",null))};var d="2868899261"},m0LI:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],a=!0,n=!1,l=void 0;try{for(var o,i=t[Symbol.iterator]();!(a=(o=i.next()).done)&&(r.push(o.value),!e||r.length!==e);a=!0);}catch(s){n=!0,l=s}finally{try{a||null==i.return||i.return()}finally{if(n)throw l}}return r}}},wTVA:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},wkBT:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},xU4a:function(t,e,r){t.exports={article:"style-module--article--jmoVn",title:"style-module--title--2A4o7",time:"style-module--time--1EAb7",hr:"style-module--hr--2_37D",ul:"style-module--ul--WL1QE"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-jsx-ddc475232a8aac3475bf.js.map