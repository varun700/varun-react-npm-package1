"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react");function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,u,o=[],l=!0,a=!1;try{for(r=r.call(t);!(l=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);l=!0);}catch(t){a=!0,u=t}finally{try{l||null==r.return||r.return()}finally{if(a)throw u}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}exports.CounterComponent=function(){var e=n(t.useState(0),2),u=e[0],o=e[1];return r.default.createElement("div",null,r.default.createElement("p",null,"Currently, the count is ",u),r.default.createElement("button",{onClick:function(){return o(u-1)}},"Subtract"),r.default.createElement("button",{onClick:function(){return o(u+1)}},"Add"))};