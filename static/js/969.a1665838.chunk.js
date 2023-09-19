"use strict";(self.webpackChunkportfolio_template=self.webpackChunkportfolio_template||[]).push([[969],{175:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(439),o=t(791),r={darkGrayColor:"rgb(221, 221, 221)",greenColor:"rgb(192, 293, 67)",darkPurple:"#41436A",lightOrangeColor:"#FE9677",hotPink:"#F64668",redPurple:"#984063",orangeColor:"rgb(255, 154, 119)",article:"timeline_article__3Kumi",time:"timeline_time__vw1h2","time-content":"timeline_time-content__vFpZl",bar:"timeline_bar__eoqFp",circle:"timeline_circle__50gOs",detail:"timeline_detail__MMgXU"},i={orangeColor:"rgb(255, 154, 119)",modal:"modal_modal__G8faQ","modal-background":"modal_modal-background__3CZQ-",fadeIn:"modal_fadeIn__G0oUl","modal-header":"modal_modal-header__Cuzdu"},s=t(184),c=(0,o.forwardRef)((function(e,n){var t=e.header,a=e.body,o=e.footer,r=void 0===o?null:o,c=e.height,l=void 0===c?"80%":c;return(0,s.jsx)("div",{className:i["modal-background"],children:(0,s.jsxs)("section",{className:i.modal,style:{maxHeight:l},ref:n,children:[(0,s.jsx)("header",{className:i["modal-header"],children:t}),(0,s.jsxs)("section",{className:i["modal-body"],children:[a," "]}),r&&(0,s.jsx)("footer",{className:i["modal-footer"],children:r})]})})})),l=function(e){var n=(0,o.useRef)(null);return(0,o.useEffect)((function(){var t=function(t){n.current&&!n.current.contains(t.target)&&e(t)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}})),n},d=function(){var e=(0,o.useState)(!1),n=(0,a.Z)(e,2),t=n[0],r=n[1],i=function(){r(!1)};return{isOpen:t,modalRef:l((function(){i()})),hideModal:i,showModal:function(){r(!0)}}},u=t(403),h=t(820),m=function(e){var n=e.hideModal,t=e.title;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{style:{fontWeight:600},children:t}),(0,s.jsx)("img",{onClick:n,src:u.U.CLOSE,alt:"close"})]})},f=function(e){var n=e.detail;return(0,s.jsx)(s.Fragment,{children:n})};function _(e){var n=e.timelines,t=(0,o.useState)(""),i=(0,a.Z)(t,2),l=i[0],u=i[1],_=(0,o.useState)(""),j=(0,a.Z)(_,2),x=j[0],p=j[1],g=d(),b=g.isOpen,k=g.modalRef,v=g.hideModal,N=g.showModal;return(0,s.jsxs)("article",{className:r.article,children:[n.map((function(e,n){return 0===n?(0,s.jsxs)("div",{className:r.time,children:[(0,s.jsx)("div",{className:r.circle}),(0,s.jsxs)("span",{"data-aos":"fade-left","data-aos-duration":"1000","data-aos-once":"true",children:[(0,s.jsx)("strong",{children:e.period})," ",(0,s.jsxs)("span",{className:r["time-content"],children:[(0,s.jsx)("span",{children:e.content}),e.detail&&(0,s.jsxs)("button",{onClick:function(){N(),u(e.content),p(e.detail)},className:r.detail,children:["DETAIL ",(0,s.jsx)(h.qPp,{})]})]})]})]},n):(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{className:r.time,children:(0,s.jsx)("div",{className:r.bar})}),(0,s.jsxs)("div",{className:r.time,children:[(0,s.jsx)("div",{className:r.circle,children:(0,s.jsx)("div",{className:r["inner-circle"]})}),(0,s.jsxs)("span",{"data-aos":"fade-left","data-aos-duration":"1000","data-aos-once":"true",children:[(0,s.jsx)("strong",{children:e.period}),(0,s.jsxs)("span",{className:r["time-content"],children:[(0,s.jsx)("span",{children:e.content}),e.detail&&(0,s.jsxs)("button",{onClick:function(){u(e.content),p(e.detail)},className:r.detail,children:["DETAIL ",(0,s.jsx)(h.qPp,{})]})]})]})]})]},n)})),b&&(0,s.jsx)(c,{ref:k,header:(0,s.jsx)(m,{hideModal:v,title:l}),body:(0,s.jsx)(f,{detail:x}),height:"80%"})]})}},227:function(e,n,t){t(791);var a=t(867),o=t(184);n.Z=function(e){var n=e.content,t=e.id,r=void 0===t?void 0:t,i=e.item;return(0,o.jsxs)("h1",{id:r,className:a.Z.header,children:[n,i&&i]})}},908:function(e,n,t){t.d(n,{Z:function(){return i}});t(791);var a="side-bar_side__rmF0O",o=t(495),r=t(184),i=function(e){var n=e.obj;return(0,r.jsx)("aside",{className:a,children:(0,r.jsx)("ul",{children:n.map((function(e,n){return(0,r.jsx)(o.fO,{scroll:function(e){return function(e){var n=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:n+-80,behavior:"smooth"})}(e)},to:e.path,children:(0,r.jsx)("li",{children:e.content})},n)}))})})}},863:function(e,n,t){t(791);var a=t(867),o=t(184);n.Z=function(e){var n=e.icon,t=void 0===n?void 0:n,r=e.content,i=e.id,s=e.description,c=void 0===s?void 0:s;return(0,o.jsxs)("h1",{id:i,className:a.Z["sub-title"],children:[t&&t,r,c&&c]})}},403:function(e,n,t){t.d(n,{U:function(){return r},Y:function(){return o}});var a,o={NOT_FOUND:(a="not_found.svg","/portfolio"+"/images/".concat(a))},r={CLOSE:function(e){return"/portfolio"+"/icons/".concat(e)}("close.svg")}},636:function(e,n,t){t.d(n,{K5:function(){return c},je:function(){return s},rf:function(){return i}});var a=t(820),o=t(645),r=t(184),i=[{period:"0000. 00. 00",content:"content1"},{period:"0000. 00. 00",content:"content2"},{period:"0000. 00. 00",content:"content3"}],s=[{period:"0000. 00. 00",content:"content1",detail:function(){return(0,r.jsxs)("div",{className:o.Z["modal-detail"],children:[(0,r.jsxs)("p",{children:[(0,r.jsxs)("strong",{children:[(0,r.jsx)(a.RrF,{}),"Github"]}),(0,r.jsx)("span",{className:o.Z.link,onClick:function(){window.location.href="#"},children:"#"})]}),"explanation1"]})}}],c=[{period:"0000. 00. 00",content:"content1",detail:function(){return(0,r.jsxs)("div",{className:o.Z["modal-detail"],children:[(0,r.jsxs)("p",{children:[(0,r.jsxs)("strong",{children:[(0,r.jsx)(a.RrF,{}),"\uad00\ub828 Github"]}),(0,r.jsx)("span",{className:o.Z.link,onClick:function(){window.location.href="#"},children:"#"})]}),"content 1"]})}}]},969:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(791),o=t(945),r=t.n(o),i=(t(655),t(227)),s={greenColor:"rgb(192, 293, 67)",darkPurple:"#41436A",lightOrangeColor:"#FE9677",hotPink:"#F64668",redPurple:"#984063",orangeColor:"rgb(255, 154, 119)",darkGrayColor:"rgb(221, 221, 221)",article:"about_article__zTT86",emoji:"about_emoji__ugUGY","hash-row":"about_hash-row__AYwye",hash:"about_hash__yM-PD",contact:"about_contact__2VBib",link:"about_link__K+p+w",switch:"about_switch__80HYo",fadeIn:"about_fadeIn__UhkWS"},c=t(863),l=t(175),d=t(908),u=t(184),h=function(){return(0,u.jsxs)("article",{className:s.contact,children:[(0,u.jsxs)("p",{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-once":"true",children:[(0,u.jsx)("strong",{children:"Tel"})," 000-0000-0000"]}),(0,u.jsxs)("p",{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-once":"true",children:[(0,u.jsx)("strong",{children:"E-mail"})," user@email.com"]}),(0,u.jsxs)("p",{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-once":"true",children:[(0,u.jsx)("strong",{children:"Github"}),(0,u.jsx)("span",{className:s.link,onClick:function(){window.location.href="#"},children:"github link"})]}),(0,u.jsxs)("p",{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-once":"true",children:[(0,u.jsx)("strong",{children:"Tech Blog"}),(0,u.jsx)("span",{className:s.link,onClick:function(){window.location.href="#"},children:"blog link"})]})]})},m=t(636),f=function(){return(0,u.jsxs)("article",{className:s.article,children:[(0,u.jsxs)("div",{className:s["hash-row"],children:[(0,u.jsx)("span",{className:s.hash,children:"# hashtag 1"}),(0,u.jsx)("span",{className:s.hash,children:"# hashtag 2"})]}),(0,u.jsx)("p",{"data-aos":"fade-up","data-aos-duration":"1000",children:"I'm a Front-end Developer, username."}),(0,u.jsxs)("p",{"data-aos":"fade-up","data-aos-delay":"50","data-aos-duration":"1000",children:[(0,u.jsx)("strong",{children:"Introduction Title 1 "}),(0,u.jsx)("br",{}),"Introduction Paragraph 1"]}),(0,u.jsxs)("p",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"1000",children:[(0,u.jsx)("strong",{children:"Introduction Title 2"}),(0,u.jsx)("br",{}),"Introduction Paragraph 2"]}),(0,u.jsxs)("p",{"data-aos":"fade-up","data-aos-delay":"150","data-aos-duration":"1000",children:[(0,u.jsx)("strong",{children:"Introduction Title 2"}),(0,u.jsx)("br",{})," Introduction Paragraph 3"]})]})},_=[{path:"/about#about",content:"About"},{path:"/about#timeline",content:"Timeline"},{path:"/about#contact",content:"Contact"}],j=function(e){return(0,a.useEffect)((function(){r().init()})),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{obj:_}),(0,u.jsxs)("section",{className:"".concat(s.about," section"),children:[(0,u.jsx)(i.Z,{id:"about",content:"About"}),(0,u.jsx)(f,{}),(0,u.jsx)(c.Z,{id:"timeline",content:"Timeline"}),(0,u.jsx)(l.Z,{timelines:m.rf}),(0,u.jsx)(c.Z,{id:"contact",content:"Contact"}),(0,u.jsx)(h,{})]})]})}},655:function(){},867:function(e,n){n.Z={greenColor:"rgb(192, 293, 67)",redPurple:"#984063",darkPurple:"#41436A",darkGrayColor:"rgb(221, 221, 221)",errorColor:"#ff6745",orangeColor:"rgb(255, 154, 119)",header:"common-header_header__LoMrp","border-100":"common-header_border-100__MQ7+T","sub-title":"common-header_sub-title__7QjUY","project-sub-title":"common-header_project-sub-title__Zjgcs",goBack:"common-header_goBack__Pyc6N"}},645:function(e,n){n.Z={greenColor:"rgb(192, 293, 67)",redPurple:"#984063",darkPurple:"#41436A",darkGrayColor:"rgb(221, 221, 221)",errorColor:"#ff6745",orangeColor:"rgb(255, 154, 119)",skills:"skills_skills__ESR13",grid:"skills_grid__OJRsU",tech:"skills_tech__utfWc",score:"skills_score__oqTer",activity:"skills_activity__Opq45",description:"skills_description__c5rGS","modal-detail":"skills_modal-detail__kfSg-",link:"skills_link__Qd8Ne"}}}]);
//# sourceMappingURL=969.a1665838.chunk.js.map