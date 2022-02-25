"use strict";(self.webpackChunkcrypto_101_docs=self.webpackChunkcrypto_101_docs||[]).push([[206],{179:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return y}});var r=a(7462),n=a(3366),l=a(7294),o=a(3905),i=a(2389),u=a(9548),s=a(6010),d="tabItem_LplD";function c(e){var t,a,n,o=e.lazy,i=e.block,c=e.defaultValue,p=e.values,m=e.groupId,h=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(t=null!=c?c:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=v[0])?void 0:n.props.value;if(null!==f&&!k.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.UB)(),g=y.tabGroupChoices,w=y.setTabGroupChoices,T=(0,l.useState)(f),N=T[0],x=T[1],C=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=g[m];null!=I&&I!==N&&k.some((function(e){return e.value===I}))&&x(I)}var D=function(e){var t=e.currentTarget,a=C.indexOf(t),r=k[a].value;r!==N&&(E(t),x(r),null!=m&&w(m,r))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;a=C[r]||C[0];break;case"ArrowLeft":var n=C.indexOf(e.currentTarget)-1;a=C[n]||C[C.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},h)},k.map((function(e){var t=e.value,a=e.label,n=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:D,onClick:D},n,{className:(0,s.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,i.Z)();return l.createElement(c,(0,r.Z)({key:String(t)},e))}var m=function(e){var t=e.children,a=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",hidden:a,className:r},t)},h=a(1736),v=["components"],k={sidebar_position:1},b="Start Here",f={unversionedId:"intro",id:"intro",title:"Start Here",description:"<iframe",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/crypto-101-docs/docs/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Our First Contract",permalink:"/crypto-101-docs/docs/our-first-contract"}},y=[{value:"Getting Started",id:"getting-started",children:[{value:"What you&#39;ll need",id:"what-youll-need",children:[],level:3}],level:2},{value:"Cloning the Repo",id:"cloning-the-repo",children:[],level:2},{value:"Install the deps",id:"install-the-deps",children:[],level:2},{value:"Start your site",id:"start-your-site",children:[],level:2}],g={toc:y};function w(e){var t=e.components,a=(0,n.Z)(e,v);return(0,o.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"start-here"},"Start Here"),(0,o.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",height:0}},(0,o.kt)("iframe",{src:"https://www.loom.com/embed/b04e1a6703e945eeb0ce7be7967859a1",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,o.kt)("p",null,"This tutorial the written companion to a video series and ",(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/events/nft-sandsmartcontracts6899020242270724096/about/"},"live webinar"),"!"),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/the-black-codes/crypto-101"},"repo")," and let's get started!"),(0,o.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 14 or above:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop"))),(0,o.kt)("h2",{id:"cloning-the-repo"},"Cloning the Repo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/The-Black-Codes/crypto-101.git\n")),(0,o.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,o.kt)("h2",{id:"install-the-deps"},"Install the deps"),(0,o.kt)("p",null,"From the project root directory"),(0,o.kt)(p,{mdxType:"Tabs"},(0,o.kt)(m,{value:"yarn",label:"yarn",default:!0,mdxType:"TabItem"},(0,o.kt)(h.Z,{language:"bash",mdxType:"CodeBlock"},"yarn")),(0,o.kt)(m,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,o.kt)(h.Z,{language:"bash",mdxType:"CodeBlock"},"npm install"))),(0,o.kt)("h2",{id:"start-your-site"},"Start your site"),(0,o.kt)("p",null,"Run the development server to ensure React is working as expected!"),(0,o.kt)(p,{mdxType:"Tabs"},(0,o.kt)(m,{value:"yarn",label:"yarn",default:!0,mdxType:"TabItem"},(0,o.kt)(h.Z,{language:"bash",mdxType:"CodeBlock"},"yarn start")),(0,o.kt)(m,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,o.kt)(h.Z,{language:"bash",mdxType:"CodeBlock"},"npm run start"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run start")," command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/."))}w.isMDXComponent=!0}}]);