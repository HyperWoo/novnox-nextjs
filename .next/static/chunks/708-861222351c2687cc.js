"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{2953:function(e,i,l){l.d(i,{M:function(){return s}});var a=l(9682);l(6888),l(2803),l(103),a.ZP.use([a.Gk,a.tl,a.W_,a.xW,a.pt,a.rj,a.gI,a.oM,a.kr,a.Ay,a.o3,a.LW,a.N1,a.s5,a.VS,a.Rv]);let s={milInfiniteSlider:{slidesPerView:1,spaceBetween:0,speed:4e3,autoplay:!0,autoplay:{delay:0},loop:!0,freeMode:!0,breakpoints:{768:{slidesPerView:2},992:{slidesPerView:4}}},milBannerSlider:{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milBannerSlider2:{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milProcessSlider:{slidesPerView:1,spaceBetween:30,speed:800,parallax:!0,navigation:{prevEl:".mil-process-prev",nextEl:".mil-process-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milReviewsSlider:{slidesPerView:1,spaceBetween:30,speed:800,effect:"fade",parallax:!0,navigation:{prevEl:".mil-process-prev",nextEl:".mil-process-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milIllustrationSlider:{slidesPerView:1,spaceBetween:30,speed:800,effect:"fade",parallax:!0,navigation:{prevEl:".mil-illustration-prev",nextEl:".mil-illustration-next"}}}},2932:function(e,i,l){l.r(i),l.d(i,{default:function(){return o}});var a=l(9268),s=JSON.parse('{"TN":"Architecture Awards","WL":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum gravida.","LI":{"p":"/blog","P":"See All"},"BH":{"H":"/img/photo/2.jpg","w":"image"},"ev":[{"title":"Designs of the Year","year":"2022","image":"/img/photo/1.jpg"},{"title":"Firms of the Year","year":"2019","image":"/img/photo/2.jpg"},{"title":"Product Winners","year":"2014","image":"/img/photo/5.jpg"},{"title":"Photography Winners","year":"2008","image":"/img/photo/4.jpg"}]}'),t=l(6006),r=l(226);let n=()=>{let e=r.p8.utils.toArray(".mil-hover-item"),i=document.querySelector(".mil-img-wrapper"),l=document.querySelector(".mil-img-wrapper img");function a(e){e.clientX,e.clientY,r.p8.timeline()}function s(e){if("mouseenter"===e.type){let a=e.target.dataset.src;r.p8.timeline().set(l,{attr:{src:a}}).to(i,{autoAlpha:1,scale:1})}else"mouseleave"===e.type&&r.p8.timeline().to(i,{autoAlpha:0,scale:.3})}e.forEach(e=>{e.addEventListener("mouseenter",s),e.addEventListener("mouseleave",s),e.addEventListener("mousemove",a)})},m=()=>((0,t.useEffect)(()=>{n()},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{children:(0,a.jsxs)("div",{className:"container mil-p-120-90",children:[(0,a.jsx)("div",{className:"mil-background-grid mil-softened"}),(0,a.jsxs)("div",{className:"row justify-content-between",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"mil-mb-90",children:[(0,a.jsx)("h2",{className:"mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:s.TN}}),(0,a.jsx)("p",{className:"mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:s.WL}}),(0,a.jsxs)("a",{href:s.LI.p,className:"mil-link mil-upper mil-up",children:[s.LI.P,(0,a.jsx)("span",{className:"mil-arrow",children:(0,a.jsx)("img",{src:"/img/icons/1.svg",alt:"arrow"})})]})]})}),(0,a.jsx)("div",{className:"col-lg-7",children:(0,a.jsxs)("div",{className:"mil-hover-images mil-up",children:[(0,a.jsx)("ul",{children:s.ev.map((e,i)=>(0,a.jsx)("li",{className:"mil-up",children:(0,a.jsxs)("a",{className:"mil-hover-item",href:"#.",onClick:e=>{e.preventDefault()},"data-src":e.image,children:[(0,a.jsx)("p",{children:e.year}),(0,a.jsx)("span",{className:"mil-h4",children:e.title})]})},"awards-item-".concat(i)))}),(0,a.jsx)("div",{className:"mil-img-wrapper mil-mb-30",children:(0,a.jsx)("img",{src:s.BH.H,alt:s.BH.w})})]})})]})]})})}));var o=m},2442:function(e,i,l){l.r(i);var a=l(9268),s=l(6006),t=l(2953),r=l(9321),n=l(9682),m=l(3821);n.ZP.use([n.pt]);let o=e=>{let{bgStyle:i}=e,[l,n]=(0,s.useState)(null),o=()=>{l.slideTo(0)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"mil-".concat(i,"-bg mil-partners mil-relative"),children:["soft"===i&&(0,a.jsx)("img",{src:"/img/other/bg.svg",className:"mil-bg-img",alt:"image"}),(0,a.jsxs)("div",{className:"container mil-p-120-120",children:[(0,a.jsx)("div",{className:"mil-background-grid mil-softened"}),(0,a.jsx)(r.tq,{...t.M.milInfiniteSlider,className:"swiper-container mil-infinite-show mil-up",loop:!0,autoplay:{delay:1e3},onSwiper:n,onReachEnd:o,children:m.e.map((e,i)=>(0,a.jsx)(r.o5,{className:"swiper-slide",children:(0,a.jsx)("a",{href:e.link,target:"_blank",className:"mil-partner-frame",style:{width:"60px"},children:(0,a.jsx)("img",{src:e.image,alt:e.alt})})},"partners-slider-item-".concat(i)))})]})]})})};i.default=o},9406:function(e,i,l){l.r(i),l.d(i,{default:function(){return m}});var a=l(9268),s=l(2953),t=l(9321),r=JSON.parse('{"TN":"Our process","Oc":"How it Works","QK":[[{"title":"We Hear","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Give Ideas","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Plan the Bases","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."}],[{"title":"We Hear","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Give Ideas","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Plan the Bases","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."}],[{"title":"We Hear","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Give Ideas","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Plan the Bases","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."}]]}');let n=e=>{let{bgStyle:i="default",paddingTop:l="120"}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("section",{className:"mil-".concat(i,"-bg mil-relative"),children:["soft"==i&&(0,a.jsx)("img",{src:"/img/other/bg.svg",className:"mil-bg-img",alt:"image"}),(0,a.jsxs)("div",{className:"container mil-p-".concat(l,"-60"),children:[(0,a.jsxs)("div",{className:"row align-items-end",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"mil-mb-90",children:[(0,a.jsx)("span",{className:"mil-suptitle mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:r.Oc}}),(0,a.jsx)("h2",{className:"mil-upper mil-up",dangerouslySetInnerHTML:{__html:r.TN}})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"mil-adaptive-right mil-up mil-mb-90",children:(0,a.jsxs)("div",{className:"mil-nav-buttons",children:[(0,a.jsx)("div",{className:"mil-slider-button mil-process-prev",children:"Prev"}),(0,a.jsx)("div",{className:"mil-slider-button mil-process-next",children:"Next"})]})})})]}),(0,a.jsx)(t.tq,{...s.M.milProcessSlider,className:"swiper-container mil-process-slider",children:(0,a.jsx)("div",{className:"swiper-wrapper",children:r.QK.map((e,i)=>(0,a.jsx)(t.o5,{className:"swiper-slide",children:(0,a.jsx)("div",{className:"swiper-slide",children:(0,a.jsx)("div",{className:"row",children:e.map((e,l)=>(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"mil-process-box mil-icon-box mil-up mil-mb-60","data-swiper-parallax-duration":"400","data-swiper-parallax":"-900","data-swiper-parallax-scale":".8","data-swiper-parallax-opacity":"0",children:[(0,a.jsx)("div",{className:"mil-icon mil-icon-border mil-mb-30",children:(0,a.jsx)("img",{src:"/img/icons/11.svg",alt:"icon"})}),(0,a.jsx)("h4",{className:"mil-upper mil-mb-30",children:e.title}),(0,a.jsx)("p",{children:e.text})]})},"process-slider-item-".concat(i,"-step-").concat(l)))})})},"process-slider-item-".concat(i)))})})]})]})})};var m=n},3821:function(e){e.exports=JSON.parse('{"e":[{"image":"/img/partners/1.1.png","alt":"logo"},{"image":"/img/partners/2.1.png","alt":"logo"},{"image":"/img/partners/3.1.png","alt":"logo"},{"image":"/img/partners/4.1.png","alt":"logo"},{"image":"/img/partners/5.1.png","alt":"logo"},{"image":"/img/partners/6.1.png","alt":"logo"}]}')}}]);