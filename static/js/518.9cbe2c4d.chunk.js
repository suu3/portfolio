"use strict";(self.webpackChunkportfolio_template=self.webpackChunkportfolio_template||[]).push([[518],{175:function(e,t,n){n.d(t,{Z:function(){return j}});var i=n(439),s=n(791),o={darkGrayColor:"rgb(221, 221, 221)",greenColor:"rgb(192, 293, 67)",darkPurple:"#41436A",lightOrangeColor:"#FE9677",hotPink:"#F64668",redPurple:"#984063",orangeColor:"rgb(255, 154, 119)",article:"timeline_article__3Kumi",time:"timeline_time__vw1h2","time-content":"timeline_time-content__vFpZl",bar:"timeline_bar__eoqFp",circle:"timeline_circle__50gOs",detail:"timeline_detail__MMgXU"},r={orangeColor:"rgb(255, 154, 119)",modal:"modal_modal__G8faQ","modal-background":"modal_modal-background__3CZQ-",fadeIn:"modal_fadeIn__G0oUl","modal-header":"modal_modal-header__Cuzdu"},a=n(184),l=(0,s.forwardRef)((function(e,t){var n=e.header,i=e.body,s=e.footer,o=void 0===s?null:s,l=e.height,c=void 0===l?"80%":l;return(0,a.jsx)("div",{className:r["modal-background"],children:(0,a.jsxs)("section",{className:r.modal,style:{maxHeight:c},ref:t,children:[(0,a.jsx)("header",{className:r["modal-header"],children:n}),(0,a.jsxs)("section",{className:r["modal-body"],children:[i," "]}),o&&(0,a.jsx)("footer",{className:r["modal-footer"],children:o})]})})})),c=function(e){var t=(0,s.useRef)(null);return(0,s.useEffect)((function(){var n=function(n){t.current&&!t.current.contains(n.target)&&e(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}})),t},d=function(){var e=(0,s.useState)(!1),t=(0,i.Z)(e,2),n=t[0],o=t[1],r=function(){o(!1)};return{isOpen:n,modalRef:c((function(){r()})),hideModal:r,showModal:function(){o(!0)}}},u=n(403),h=n(820),m=function(e){var t=e.hideModal,n=e.title;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{style:{fontWeight:600},children:n}),(0,a.jsx)("img",{onClick:t,src:u.U.CLOSE,alt:"close"})]})},f=function(e){var t=e.detail;return(0,a.jsx)(a.Fragment,{children:t})};function j(e){var t=e.timelines,n=(0,s.useState)(""),r=(0,i.Z)(n,2),c=r[0],u=r[1],j=(0,s.useState)(""),x=(0,i.Z)(j,2),_=x[0],p=x[1],g=d(),v=g.isOpen,k=g.modalRef,b=g.hideModal,N=g.showModal;return(0,a.jsxs)("article",{className:o.article,children:[t.map((function(e,t){return 0===t?(0,a.jsxs)("div",{className:o.time,children:[(0,a.jsx)("div",{className:o.circle}),(0,a.jsxs)("span",{"data-aos":"fade-left","data-aos-duration":"1000","data-aos-once":"true",children:[(0,a.jsx)("strong",{children:e.period})," ",(0,a.jsxs)("span",{className:o["time-content"],children:[(0,a.jsx)("span",{children:e.content}),e.detail&&(0,a.jsxs)("button",{onClick:function(){N(),u(e.content),p(e.detail)},className:o.detail,children:["DETAIL ",(0,a.jsx)(h.qPp,{})]})]})]})]},t):(0,a.jsxs)("li",{children:[(0,a.jsx)("div",{className:o.time,children:(0,a.jsx)("div",{className:o.bar})}),(0,a.jsxs)("div",{className:o.time,children:[(0,a.jsx)("div",{className:o.circle,children:(0,a.jsx)("div",{className:o["inner-circle"]})}),(0,a.jsxs)("span",{"data-aos":"fade-left","data-aos-duration":"1000","data-aos-once":"true",children:[(0,a.jsx)("strong",{children:e.period}),(0,a.jsxs)("span",{className:o["time-content"],children:[(0,a.jsx)("span",{children:e.content}),e.detail&&(0,a.jsxs)("button",{onClick:function(){u(e.content),p(e.detail)},className:o.detail,children:["DETAIL ",(0,a.jsx)(h.qPp,{})]})]})]})]})]},t)})),v&&(0,a.jsx)(l,{ref:k,header:(0,a.jsx)(m,{hideModal:b,title:c}),body:(0,a.jsx)(f,{detail:_}),height:"80%"})]})}},227:function(e,t,n){n(791);var i=n(867),s=n(184);t.Z=function(e){var t=e.content,n=e.id,o=void 0===n?void 0:n,r=e.item;return(0,s.jsxs)("h1",{id:o,className:i.Z.header,children:[t,r&&r]})}},908:function(e,t,n){n.d(t,{Z:function(){return r}});n(791);var i="side-bar_side__rmF0O",s=n(495),o=n(184),r=function(e){var t=e.obj;return(0,o.jsx)("aside",{className:i,children:(0,o.jsx)("ul",{children:t.map((function(e,t){return(0,o.jsx)(s.fO,{scroll:function(e){return function(e){var t=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t+-80,behavior:"smooth"})}(e)},to:e.path,children:(0,o.jsx)("li",{children:e.content})},t)}))})})}},863:function(e,t,n){n(791);var i=n(867),s=n(184);t.Z=function(e){var t=e.icon,n=void 0===t?void 0:t,o=e.content,r=e.id,a=e.description,l=void 0===a?void 0:a;return(0,s.jsxs)("h1",{id:r,className:i.Z["sub-title"],children:[n&&n,o,l&&l]})}},403:function(e,t,n){n.d(t,{U:function(){return o},Y:function(){return s}});var i,s={NOT_FOUND:(i="not_found.svg","/portfolio"+"/images/".concat(i))},o={CLOSE:function(e){return"/portfolio"+"/icons/".concat(e)}("close.svg")}},636:function(e,t,n){n.d(t,{K5:function(){return l},je:function(){return a},rf:function(){return r}});var i=n(820),s=n(645),o=n(184),r=[{period:"0000. 00. 00",content:"content1"},{period:"0000. 00. 00",content:"content2"},{period:"0000. 00. 00",content:"content3"}],a=[{period:"0000. 00. 00",content:"content1",detail:function(){return(0,o.jsxs)("div",{className:s.Z["modal-detail"],children:[(0,o.jsxs)("p",{children:[(0,o.jsxs)("strong",{children:[(0,o.jsx)(i.RrF,{}),"Github"]}),(0,o.jsx)("span",{className:s.Z.link,onClick:function(){window.location.href="#"},children:"#"})]}),"explanation1"]})}}],l=[{period:"0000. 00. 00",content:"content1",detail:function(){return(0,o.jsxs)("div",{className:s.Z["modal-detail"],children:[(0,o.jsxs)("p",{children:[(0,o.jsxs)("strong",{children:[(0,o.jsx)(i.RrF,{}),"\uad00\ub828 Github"]}),(0,o.jsx)("span",{className:s.Z.link,onClick:function(){window.location.href="#"},children:"#"})]}),"content 1"]})}}]},518:function(e,t,n){n.r(t);var i=n(791),s=n(945),o=n.n(s),r=(n(655),n(227)),a=n(908),l=n(645),c=n(863),d=n(126),u=n(856),h=n(175),m=n(636),f=n(184),j=[{path:"/skills#skills",content:"Skills"},{path:"/skills#activities",content:"Activities"},{path:"/skills#awards",content:"Awards"}];t.default=function(e){return(0,i.useEffect)((function(){o().init()})),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{obj:j}),(0,f.jsxs)("section",{className:"".concat(l.Z.skills," section"),children:[(0,f.jsx)(r.Z,{content:"Skills",id:"skills"}),(0,f.jsxs)("article",{className:l.Z.grid,children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("h3",{children:[(0,f.jsx)(u.pUp,{}),"Tech Stack"]}),(0,f.jsxs)("p",{className:l.Z.tech,"data-aos":"fade-up","data-aos-duration":"1000","data-aos-once":"true",children:[(0,f.jsx)("img",{alt:"stack",src:"https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"}),(0,f.jsx)("img",{alt:"stack",src:"https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"}),(0,f.jsx)("img",{alt:"stack",src:"https://img.shields.io/badge/JavaScript-ffb13b?style=flat-square&logo=javascript&logoColor=white"})]})]}),(0,f.jsxs)("div",{className:l.Z.score,children:[(0,f.jsxs)("h3",{children:[(0,f.jsx)(d.Ph1,{}),"Scores"]}),(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-once":"true",children:[(0,f.jsx)("strong",{children:"certificate"})," 1"]}),(0,f.jsxs)("li",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"1000","data-aos-once":"true",children:[(0,f.jsx)("strong",{children:"certificate"})," 2"]})]})]})]}),(0,f.jsxs)("article",{children:[(0,f.jsx)(c.Z,{content:"Activities",id:"activities",description:(0,f.jsx)("p",{className:l.Z.description,children:"description"})}),(0,f.jsx)(h.Z,{timelines:m.je})]}),(0,f.jsxs)("article",{children:[(0,f.jsx)(c.Z,{content:"Awards",id:"awards"}),(0,f.jsx)(h.Z,{timelines:m.K5})]})]})]})}},867:function(e,t){t.Z={greenColor:"rgb(192, 293, 67)",redPurple:"#984063",darkPurple:"#41436A",darkGrayColor:"rgb(221, 221, 221)",errorColor:"#ff6745",orangeColor:"rgb(255, 154, 119)",header:"common-header_header__LoMrp","border-100":"common-header_border-100__MQ7+T","sub-title":"common-header_sub-title__7QjUY","project-sub-title":"common-header_project-sub-title__Zjgcs",goBack:"common-header_goBack__Pyc6N"}},645:function(e,t){t.Z={greenColor:"rgb(192, 293, 67)",redPurple:"#984063",darkPurple:"#41436A",darkGrayColor:"rgb(221, 221, 221)",errorColor:"#ff6745",orangeColor:"rgb(255, 154, 119)",skills:"skills_skills__ESR13",grid:"skills_grid__OJRsU",tech:"skills_tech__utfWc",score:"skills_score__oqTer",activity:"skills_activity__Opq45",description:"skills_description__c5rGS","modal-detail":"skills_modal-detail__kfSg-",link:"skills_link__Qd8Ne"}}}]);
//# sourceMappingURL=518.9cbe2c4d.chunk.js.map