"use strict";(self.webpackChunkcrypto_101_docs=self.webpackChunkcrypto_101_docs||[]).push([[656],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,y=p["".concat(l,".").concat(h)]||p[h]||s[h]||a;return n?r.createElement(y,c(c({ref:t},u),{},{components:n})):r.createElement(y,c({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1673:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:5},l="Running a local Blockchain Node with Hardhat",d={unversionedId:"running-a-local-blockchain-node",id:"running-a-local-blockchain-node",title:"Running a local Blockchain Node with Hardhat",description:"<iframe",source:"@site/docs/running-a-local-blockchain-node.mdx",sourceDirName:".",slug:"/running-a-local-blockchain-node",permalink:"/crypto-101-docs/docs/running-a-local-blockchain-node",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/running-a-local-blockchain-node.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Solidity TDD: Counter Contract",permalink:"/crypto-101-docs/docs/tdd-contract-development"},next:{title:"Connecting React",permalink:"/crypto-101-docs/docs/connecting-react"}},u=[{value:"What is a Blockchain Node?",id:"what-is-a-blockchain-node",children:[],level:2},{value:"Running a Local Blockchain Node with Hardhat",id:"running-a-local-blockchain-node-with-hardhat-1",children:[],level:2},{value:"Deploying a Smart Contract",id:"deploying-a-smart-contract",children:[{value:"Your deploy script",id:"your-deploy-script",children:[],level:3},{value:"Using hardhat to deploy your script",id:"using-hardhat-to-deploy-your-script",children:[],level:3}],level:2}],s={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-a-local-blockchain-node-with-hardhat"},"Running a local Blockchain Node with Hardhat"),(0,a.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",height:0}},(0,a.kt)("iframe",{src:"https://www.loom.com/embed/3c03696ffdd244d39b158239c7745140",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,a.kt)("h2",{id:"what-is-a-blockchain-node"},"What is a Blockchain Node?"),(0,a.kt)("p",null,"A Blockchain Node is a computer that runs the blockchain. It is responsible for storing the blockchain data, and for running the consensus algorithm."),(0,a.kt)("h2",{id:"running-a-local-blockchain-node-with-hardhat-1"},"Running a Local Blockchain Node with Hardhat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat node\n")),(0,a.kt)("h2",{id:"deploying-a-smart-contract"},"Deploying a Smart Contract"),(0,a.kt)("p",null,"At this point you have a local blockchain node running. Let's deploy a smart contract."),(0,a.kt)("h3",{id:"your-deploy-script"},"Your deploy script"),(0,a.kt)("p",null,"Create a file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"deployCounter.ts")," with the following contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import "@nomiclabs/hardhat-ethers";\nimport { ethers } from "hardhat";\n\nasync function deploy() {\n  const Counter = await ethers.getContractFactory("Counter");\n  const counter = await Counter.deploy();\n  await counter.deployed();\n}\n\ndeploy().catch(console.error);\n')),(0,a.kt)("h3",{id:"using-hardhat-to-deploy-your-script"},"Using hardhat to deploy your script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat run ./scripts/deployCounter.ts --network localhost\n")))}p.isMDXComponent=!0}}]);