(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[23],{1618:function(e,n,s){"use strict";s.r(n),s.d(n,"resources",(function(){return t}));const t={"userscript.js":async function({addon:e,global:n,cons:s,msg:t}){const o=await e.tab.traps.getBlockly();let c=null;function i(n,s){return c||(c=[...n]),e.self.disabled||(n.push(["-","-"],[",",","],[".","."]),n.splice(5,0,[t("enter-key"),"enter"]),e.settings.get("experimentalKeys")&&n.push(["`","`"],["=","="],["[","["],["]","]"],["\\","\\"],[";",";"],["'","'"],["/","/"]),s&&e.settings.get("shiftKeys")&&n.push(["!","!"],["@","@"],["#","#"],["$","$"],["%","%"],["^","^"],["&","&"],["*","*"],["(","("],[")",")"],["_","_"],["+","+"],["{","{"],["}","}"],["|","|"],[":",":"],['"','"'],["?","?"],["<","<"],[">",">"],["~","~"]),e.settings.get("twKeys")&&n.push(["backspace","backspace"],["delete","delete"],["shift","shift"],["caps lock","caps lock"],["scroll lock","scroll lock"],["control","control"],["escape","escape"],["insert","insert"],["home","home"],["end","end"],["page up","page up"],["page down","page down"])),n}for(const e of["sensing_keyoptions","event_whenkeypressed"]){const n=o.Blocks[e],s=n.init;n.init=function(...n){const t=this.jsonInit;return this.jsonInit=function(n){return i(n.args0[0].options,"event_whenkeypressed"===e),t.call(this,n)},s.call(this,...n)}}const r=()=>{const e=Blockly.getMainWorkspace(),n=e&&e.getFlyout();if(e&&n){const s=[...e.getAllBlocks(),...n.getWorkspace().getAllBlocks()];for(const e of s){if("event_whenkeypressed"!==e.type&&"sensing_keyoptions"!==e.type)continue;const n=e.inputList[0];if(!n)continue;const s=n.fieldRow.find(e=>e&&Array.isArray(e.menuGenerator_));s&&(s.menuGenerator_=i(c?[...c]:s.menuGenerator_,"event_whenkeypressed"===e.type))}}};r(),e.settings.addEventListener("change",r),e.self.addEventListener("disabled",r),e.self.addEventListener("reenabled",r)}}}}]);