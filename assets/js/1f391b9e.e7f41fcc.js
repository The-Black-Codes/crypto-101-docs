"use strict";(self.webpackChunkcrypto_101_docs=self.webpackChunkcrypto_101_docs||[]).push([[85],{7440:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7462),l=t(3366),r=t(7294),i=t(2859),c=t(9960),s=t(1736),o=t(9649),m=t(6010),u=t(9548),d="details_BAp3";function f(e){var n=Object.assign({},e);return r.createElement(u.PO,(0,a.Z)({},n,{className:(0,m.Z)("alert alert--info",d,n.className)}))}var v=["mdxType","originalType"];var p={head:function(e){var n=r.Children.map(e.children,(function(e){return function(e){var n,t;if(null!=e&&null!=(n=e.props)&&n.mdxType&&null!=e&&null!=(t=e.props)&&t.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,l.Z)(a,v));return r.createElement(e.props.originalType,i)}return e}(e)}));return r.createElement(i.Z,e,n)},code:function(e){return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?r.createElement("code",e):r.createElement(s.Z,e)},a:function(e){return r.createElement(c.Z,e)},pre:function(e){var n;return r.createElement(s.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(n=e.children)?void 0:n.props:Object.assign({},e))},details:function(e){var n=r.Children.toArray(e.children),t=n.find((function(e){var n;return"summary"===(null==e||null==(n=e.props)?void 0:n.mdxType)})),l=r.createElement(r.Fragment,null,n.filter((function(e){return e!==t})));return r.createElement(f,(0,a.Z)({},e,{summary:t}),l)},h1:function(e){return r.createElement(o.Z,(0,a.Z)({as:"h1"},e))},h2:function(e){return r.createElement(o.Z,(0,a.Z)({as:"h2"},e))},h3:function(e){return r.createElement(o.Z,(0,a.Z)({as:"h3"},e))},h4:function(e){return r.createElement(o.Z,(0,a.Z)({as:"h4"},e))},h5:function(e){return r.createElement(o.Z,(0,a.Z)({as:"h5"},e))},h6:function(e){return r.createElement(o.Z,(0,a.Z)({as:"h6"},e))}}},6416:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(7294),l=t(6010),r=t(2434),i=t(3905),c=t(7440),s=t(1575),o=t(9548),m="mdxPageWrapper_zHyg";var u=function(e){var n=e.content,t=n.metadata,u=t.title,d=t.description,f=t.permalink,v=t.frontMatter,p=v.wrapperClassName,h=v.hide_table_of_contents;return a.createElement(r.Z,{title:u,description:d,permalink:f,wrapperClassName:null!=p?p:o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",m)},a.createElement("div",{className:(0,l.Z)("col",!h&&"col--8")},a.createElement(i.Zo,{components:c.Z},a.createElement(n,null))),!h&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:n.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level})))))}},1575:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),l=t(3366),r=t(7294),i=t(6010),c=t(5002),s="tableOfContents_cNA8",o=["className"];var m=function(e){var n=e.className,t=(0,l.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",n)},r.createElement(c.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7462),l=t(3366),r=t(7294),i=t(9548),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var n=e.toc,t=e.className,a=e.linkClassName,l=e.isChild;return n.length?r.createElement("ul",{className:l?void 0:t},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}function o(e){var n=e.toc,t=e.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,f=void 0===d?void 0:d,v=e.minHeadingLevel,p=e.maxHeadingLevel,h=(0,l.Z)(e,c),g=(0,i.LU)(),Z=null!=v?v:g.tableOfContents.minHeadingLevel,E=null!=p?p:g.tableOfContents.maxHeadingLevel,N=(0,i.DA)({toc:n,minHeadingLevel:Z,maxHeadingLevel:E}),_=(0,r.useMemo)((function(){if(u&&f)return{linkClassName:u,linkActiveClassName:f,minHeadingLevel:Z,maxHeadingLevel:E}}),[u,f,Z,E]);return(0,i.Si)(_),r.createElement(s,(0,a.Z)({toc:N,className:o,linkClassName:u},h))}}}]);