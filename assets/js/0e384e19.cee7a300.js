"use strict";(self.webpackChunkcrypto_101_docs=self.webpackChunkcrypto_101_docs||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},s="Tutorial Intro",u={unversionedId:"intro",id:"intro",title:"Tutorial Intro",description:"Let's discover Docusaurus in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create a Page",permalink:"/docs/tutorial-basics/create-a-page"}},c=[{value:"Getting Started",id:"getting-started",children:[{value:"What you&#39;ll need",id:"what-youll-need",children:[],level:3}],level:2},{value:"Generate a new site",id:"generate-a-new-site",children:[],level:2},{value:"Start your site",id:"start-your-site",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,o.kt)("p",null,"Let's discover ",(0,o.kt)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),"."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("strong",{parentName:"p"},"creating a new site"),"."),(0,o.kt)("p",null,"Or ",(0,o.kt)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.new"},"docusaurus.new")),"."),(0,o.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 14 or above:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies.")))),(0,o.kt)("h2",{id:"generate-a-new-site"},"Generate a new site"),(0,o.kt)("p",null,"Generate a new Docusaurus site using the ",(0,o.kt)("strong",{parentName:"p"},"classic template"),"."),(0,o.kt)("p",null,"The classic template will automatically be added to your project after you run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus@latest my-website classic\n")),(0,o.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,o.kt)("p",null,"The command also installs all necessary dependencies you need to run Docusaurus."),(0,o.kt)("h2",{id:"start-your-site"},"Start your site"),(0,o.kt)("p",null,"Run the development server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nnpm run start\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run start")," command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," (this page) and edit some lines: the site ",(0,o.kt)("strong",{parentName:"p"},"reloads automatically")," and displays your changes."))}d.isMDXComponent=!0}}]);