(()=>{var e={602:()=>{!function(){for(var e=document.querySelectorAll("#current-version"),t=0;t<e.length;t++)e[t].textContent="0.1.6-jean-michel-basquiat--igor-pink"}()},381:()=>{var e=document.querySelectorAll(".popup"),t=document.querySelectorAll(".popup__container"),o=document.querySelectorAll(".popup__close"),n=document.querySelector(".popup__license"),r=document.querySelector(".popup__license_badges"),c=document.querySelector("#popupLicense"),u=document.querySelector(".popup__PGP"),p=document.querySelector("#popupPGP");function i(e){e.classList.add("popup_opened"),document.addEventListener("keydown",s)}function d(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",s)}function l(){i(c)}function a(e){d(e.target.closest(".popup"))}function s(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");t&&d(t)}}function f(e){e.stopPropagation()}e.forEach((function(e){e.addEventListener("click",a)})),t.forEach((function(e){e.addEventListener("click",f)})),n.addEventListener("click",l),r.addEventListener("click",l),u.addEventListener("click",(function(){i(p)})),o.forEach((function(e){return e.addEventListener("click",a)}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(602),o(381)})()})();