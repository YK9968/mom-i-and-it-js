import{A as P,S as b,a as L,i as U}from"./assets/vendor-c5645cdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();async function z(e){return new Promise((t,r)=>{const o=new Image;o.onload=()=>t(o),o.onerror=r,o.src=e})}async function H(e){return new Promise((t,r)=>{const o=new Image;o.onload=()=>t(o),o.onerror=r,o.src=e})}document.addEventListener("DOMContentLoaded",D);async function D(){try{let e;if(window.matchMedia&&window.matchMedia("(min-resolution: 192dpi)").matches){e="./img/mobile/hero-mobile@2x.png";const t=await H(e),r=document.querySelector(".hero-bg");r.style.backgroundImage=`url('${t.src}')`}else{e="./img/mobile/hero-mobile.png";const t=await z(e),r=document.querySelector(".hero-bg");r.style.backgroundImage=`url('${t.src}')`}}catch(e){console.error(e)}}(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuLink:document.querySelectorAll(".header-mob-menu-link"),orderLink:document.querySelector(".header-mob-menu-order-link")};e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.menuLink.forEach(o=>o.addEventListener("click",r)),e.orderLink.addEventListener("click",r);function t(){e.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function r(o){o.preventDefault(),t();const n=this.getAttribute("href").slice(1),s=document.getElementById(n);if(s){const j=s.getBoundingClientRect().top+window.scrollY+-60;window.scrollTo({top:j,behavior:"smooth"})}}})();const G=document.querySelector(".about-list"),_={duration:400,showMultiple:!0,beforeOpen:e=>{const t=e.querySelector(".about-btn-icon");t.style.transition="transform 0.5s",t.style.transform="rotate(180deg)"},beforeClose:e=>{const t=e.querySelector(".about-btn-icon");t.style.transition="transform 0.5s",t.style.transform="rotate(0deg)"}},F=new P(G,_);F.open(0);const Z=document.querySelector(".faq-column"),K={duration:400,showMultiple:!0,beforeOpen:e=>{const t=e.querySelector(".faq-arrow-img");t.style.transition="transform 0.5s",t.style.transform="rotate(180deg)"},beforeClose:e=>{const t=e.querySelector(".faq-arrow-img");t.style.transition="transform 0.5s",t.style.transform="rotate(0deg)"}};new P(Z,K);const W=document.querySelector(".project-swiper"),Y={speed:900,allowTouchMove:!1,navigation:{nextEl:".project-btn-next",prevEl:".project-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!1}};new b(W,Y);const J=document.querySelector(".reviews-swiper"),Q={speed:900,allowTouchMove:!1,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:4,spaceBetween:16}}};new b(J,Q);const X=document.querySelector(".about-swiper"),ee=document.querySelector(".about-swiper-list"),te=document.querySelector(".about-swiper-btn");function oe(){const e=document.querySelectorAll(".about-swiper-item"),t=[];for(const o of e)t.push(o.textContent.trim());t[6]=t[0];const r=ee.lastElementChild;r.textContent=t[6]}const ne={watchOverflow:!1,oneWayMovement:!0,rewind:!0,speed:900,allowTouchMove:!1,loop:!0,slidesPerView:2,navigation:{nextEl:".about-swiper-btn"},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}};new b(X,ne);te.addEventListener("click",oe);const re="https://portfolio-js.b.goit.study/api",se="/reviews";async function ie(){const{data:e}=await L.get(`${re}${se}`);return e}function ce(e,t){const r=e.map(({_id:o,author:n,avatar_url:s,review:i})=>`
      <li class="reviews-item swiper-slide" id="${o}">
        <img class="reviews-item-img" src="${s}" alt="${n}" width="48" height="48" />
        <h3 class="reviews-item-title">${n}</h3>
        <p class="reviews-item-discription">
          ${i}
        </p>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",r)}const q=document.querySelector(".reviews-list"),ae=document.querySelector(".reviews-error"),k=document.querySelector(".reviews-btn-wrapper");le();async function le(){try{const e=await ie();ce(e,q),k.classList.remove("hidden")}catch{q.classList.add("hidden"),reviewsSwiper.classList.add("hidden"),k.classList.add("hidden"),ae.classList.remove("hidden"),U.show({message:"Sorry, something went wrong. The reviews are not available",messageColor:"#fafafb",messageSize:"16px",position:"topRight",backgroundColor:"#ef4040"})}}function de(){document.querySelectorAll(".covers-content").forEach(t=>{const r=document.querySelectorAll(".covers-marquee-line"),o=t.getBoundingClientRect(),n=window.innerHeight,s=Math.min(o.bottom,n)-Math.max(o.top,0);r.forEach(i=>{s/n>=.2?window.getComputedStyle(i).getPropertyValue("animation-play-state")==="paused"&&(i.style.animationPlayState="running"):window.getComputedStyle(i).getPropertyValue("animation-play-state")==="running"&&(i.style.animationPlayState="paused")})})}window.addEventListener("scroll",de);const c=document.querySelector(".okey"),a=document.querySelector(".error"),B=document.querySelector(".modal-close-btn.positive"),C=document.querySelector(".modal-close-btn.negative");function ue(){B.addEventListener("click",x),document.addEventListener("keydown",A),c.addEventListener("click",I)}function me(){C.addEventListener("click",T),document.addEventListener("keydown",O),a.addEventListener("click",N)}function S(){B.removeEventListener("click",x),document.removeEventListener("keydown",A),c.removeEventListener("click",I)}function E(){C.removeEventListener("click",T),document.removeEventListener("keydown",O),a.removeEventListener("click",N)}function M(e){e.classList.remove("is-hidden")}function l(e){e.classList.add("is-hidden")}function m(e){e.classList.add("hidden")}function fe(e){e.classList.add("disabled-button")}function x(){l(c),S()}function A(e){e.keyCode===27&&l(c),S()}function I(e){e.target===c&&(l(c),S())}function T(){l(a),E()}function O(e){e.keyCode===27&&(l(a),E())}function N(e){e.target===a&&(l(a),E())}const R=document.querySelector(".worktogether-form"),V=document.querySelector(".worktogether-form-email"),w=document.querySelector('.true[data-action="email"]'),g=document.querySelector('.false[data-action="email"]'),p=document.querySelector('.true[data-action="comment"]'),y=document.querySelector('.false[data-action="comment"]'),$=document.querySelector(".worktogether-form-comments"),u=document.querySelector(".worktogether-form-button");let f=!1,v;function we(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}V.addEventListener("input",pe);function pe(e){v=e.currentTarget.value.trim(),we(v)?(f=!0,f&&d&&u.classList.remove("disabled-button"),g.classList.add("hidden"),w.classList.remove("hidden")):(f=!1,g.classList.remove("hidden"),w.classList.add("hidden"),u.classList.add("disabled-button")),v.length===0&&g.classList.add("hidden")}let h,d=!1;$.addEventListener("input",ge);function ge(e){h=e.currentTarget.value.trim(),h.length>5?(d=!0,f&&d&&u.classList.remove("disabled-button"),y.classList.add("hidden"),p.classList.remove("hidden")):(d=!1,y.classList.remove("hidden"),p.classList.add("hidden"),u.classList.add("disabled-button")),h.length===0&&y.classList.add("hidden")}R.addEventListener("submit",ye);L.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function ye(e){e.preventDefault();const t=V.value.trim(),r=$.value.trim();try{await L.post("/requests",{email:t,comment:r}),ue(),M(c),m(w),m(p),fe(u),R.reset()}catch{me(),M(a),m(w),m(p)}d=!1}
//# sourceMappingURL=commonHelpers.js.map
