(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[50],{1552:function(e,t,a){var n=a(182);(e.exports=a(9)(!1)).push([e.i,'/* Change z-indexes to allow more than 3 tabs */\n[class*="gui_tab_"][class*="gui_is-selected_"] {\n  z-index: 10 !important;\n}\n[class*="gui_tab_"]:nth-of-type(1) {\n  z-index: 9;\n}\n[class*="gui_tab_"]:nth-of-type(2) {\n  z-index: 8;\n}\n[class*="gui_tab_"]:nth-of-type(3) {\n  z-index: 7;\n}\n[class*="gui_tab_"]:nth-of-type(4) {\n  z-index: 6;\n}\n\n.sa-var-manager {\n  display: block;\n  padding: 18px;\n  /* weird hack to fix scrolling??? */\n  height: 50px;\n  overflow-y: auto;\n}\n\n.sa-var-manager-searchbox {\n  background-image: url('+n(a(1553))+');\n  width: 25%;\n  margin-bottom: 4px;\n  padding: 8px;\n  padding-right: 32px; /* for the text to not overlap the image */\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-position: calc(100% - 7px) center;\n  font-size: 0.75rem;\n}\n[theme="dark"] .sa-var-manager-searchbox {\n  border-color: #333;\n}\n\n[dir="rtl"] .sa-var-manager-searchbox {\n  padding-right: 8px;\n  padding-left: 32px;\n  background-position: 7px center;\n}\n\n.sa-var-manager.freeze .sa-var-manager-value *,\n.sa-var-manager.freeze .sa-var-manager-name * {\n  opacity: 0.5;\n}\n\n.sa-var-manager.freeze input:focus,\n.sa-var-manager.freeze textarea:focus {\n  opacity: 1;\n}\n\n.sa-var-manager-heading {\n  display: block;\n  font-weight: bold;\n  font-size: large;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.sa-var-manager-name {\n  word-break: break-word;\n}\n\n.sa-var-manager .sa-var-manager-value {\n  width: 75%;\n}\n\n.sa-var-manager * > input {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n}\n\n.sa-var-manager-value > textarea {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  line-height: 2em;\n  resize: none;\n}\n\n.sa-var-manager input:disabled, .sa-var-manager textarea:disabled {\n  font-style: italic;\n  opacity: 0.8;\n}\n\n.sa-var-manager table {\n  border-radius: 5px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.sa-var-manager td {\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  text-align: left;\n}\n[theme="dark"] .sa-var-manager td {\n  border-color: #333;\n}\n\n/* tr:nth-child(even) {\n    background-color: #dddddd;\n} */\n',""])},1553:function(e,t,a){e.exports=a.p+"static/assets/1821649bb254ff5d93bb397ad646a23f.svg"},1587:function(e,t,a){"use strict";a.r(t),a.d(t,"resources",(function(){return i}));var n=a(1552);const i={"userscript.js":async function({addon:e,global:t,console:a,msg:n}){const i=e.tab.traps.vm;let s=[],r=[],c=!1;const l=document.createElement("div");l.classList.add(e.tab.scratchClass("asset-panel_wrapper"),"sa-var-manager");const o=document.createElement("input");o.placeholder=n("search"),o.className=e.tab.scratchClass("input_input-form",{others:"sa-var-manager-searchbox"}),o.addEventListener("input",e=>{for(const e of s)e.handleSearch(o.value);for(const e of r)e.handleSearch(o.value);I()}),l.appendChild(o);const d=document.createElement("div"),u=document.createElement("span"),g=document.createElement("table");u.className="sa-var-manager-heading",u.innerText=n("for-this-sprite"),d.appendChild(u),d.appendChild(g);const h=document.createElement("div"),p=document.createElement("span"),b=document.createElement("table");p.className="sa-var-manager-heading",p.innerText=n("for-all-sprites"),h.appendChild(p),h.appendChild(b),l.appendChild(d),l.appendChild(h);const m=document.createElement("li");e.tab.displayNoneWhileDisabled(m,{display:"flex"}),m.classList.add(e.tab.scratchClass("react-tabs_react-tabs__tab"),e.tab.scratchClass("gui_tab")),m.id="react-tabs-sa-variable-manager";const M=document.createElement("img");M.draggable=!1,M.src=(e=>{if("/icon.svg"===e)return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iI2ZmNGM0YyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NDkgMy4wODRBMSAxIDAgMCAxIDUuMTYzIDQuNCAxMy45NSAxMy45NSAwIDAgMCA0IDEwYzAgMS45OTMuNDE2IDMuODg2IDEuMTY0IDUuNmExIDEgMCAwIDEtMS44MzIuOEExNS45NSAxNS45NSAwIDAgMSAyIDEwYzAtMi4yNzQuNDc1LTQuNDQgMS4zMzItNi40YTEgMSAwIDAgMSAxLjMxNy0uNTE2ek0xMi45NiA3YTMgMyAwIDAgMC0yLjM0MiAxLjEyNmwtLjMyOC40MS0uMTExLS4yNzlBMiAyIDAgMCAwIDguMzIzIDdIOGExIDEgMCAwIDAgMCAyaC4zMjNsLjUzMiAxLjMzLTEuMDM1IDEuMjk1YTEgMSAwIDAgMS0uNzgxLjM3NUg3YTEgMSAwIDEgMCAwIDJoLjAzOWEzIDMgMCAwIDAgMi4zNDItMS4xMjZsLjMyOC0uNDEuMTExLjI3OUEyIDIgMCAwIDAgMTEuNjc3IDE0SDEyYTEgMSAwIDEgMCAwLTJoLS4zMjNsLS41MzItMS4zMyAxLjAzNS0xLjI5NUExIDEgMCAwIDEgMTIuOTYxIDlIMTNhMSAxIDAgMSAwIDAtMmgtLjAzOXptMS44NzQtMi42YTEgMSAwIDAgMSAxLjgzMy0uOEExNS45NSAxNS45NSAwIDAgMSAxOCAxMGMwIDIuMjc0LS40NzUgNC40NC0xLjMzMiA2LjRhMSAxIDAgMSAxLTEuODMyLS44QTEzLjk0OSAxMy45NDkgMCAwIDAgMTYgMTBjMC0xLjk5My0uNDE2LTMuODg2LTEuMTY1LTUuNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==";if("/search.svg"===e)return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=";throw new Error("Unknown asset: ".concat(e))})("/icon.svg");const v=document.createElement("span");function I(){let e=s.filter(e=>"none"!==e.row.style.display),t=r.filter(e=>"none"!==e.row.style.display);u.style.display=0===e.length?"none":"",p.style.display=0===t.length?"none":""}v.innerText=n("variables"),m.appendChild(M),m.appendChild(v);const x=new WeakMap,E=new IntersectionObserver(e=>{for(const t of e){x.get(t.target).setVisible(t.isIntersecting)}},{rootMargin:"100px"});class A{constructor(e,t){this.scratchVariable=e,this.target=t,this.visible=!1,this.tooBig=!1,this.buildDOM()}updateValue(e){if(!this.visible&&!e)return;if(this.tooBig)return;let t;if("list"===this.scratchVariable.type?(t=this.scratchVariable.value.join("\n"),t.length>12e6&&(this.tooBig=!0)):(t=this.scratchVariable.value,t.length>1e6&&(this.tooBig=!0)),this.tooBig)return this.input.value="Too big to safely display. If this limit is too low, use the feedback button at the top of the screen.",void(this.input.disabled=!0);t!==this.input.value&&(this.input.value=t)}handleSearch(e){this.scratchVariable.name.toLowerCase().includes(e.toLowerCase())||!e?(this.row.style.display="",this.updateValue(!0)):this.row.style.display="none"}resizeInputIfList(){if("list"===this.scratchVariable.type){this.input.style.height="auto";const e=Math.min(1e3,this.input.scrollHeight);e>0&&(this.input.style.height=e+"px")}}setVisible(e){this.visible!==e&&(this.visible=e,e&&this.updateValue())}buildDOM(){const e="sa-variable-manager-".concat(this.scratchVariable.id),t=document.createElement("tr");this.row=t;const a=document.createElement("td");a.className="sa-var-manager-name";const n=document.createElement("input");n.value=this.scratchVariable.name,n.htmlFor=e;n.addEventListener("keydown",e=>{"Enter"!==e.key||e.shiftKey||e.target.blur()}),n.addEventListener("focusout",e=>{e.preventDefault();const t=Blockly.getMainWorkspace();t.getVariable(n.value,this.scratchVariable.type)?n.value=this.scratchVariable.name:t.renameVariableById(this.scratchVariable.id,n.value),n.blur()}),n.addEventListener("focus",e=>{c=!0,l.classList.add("freeze")}),n.addEventListener("blur",e=>{c=!1,l.classList.remove("freeze")}),a.appendChild(n),x.set(t,this),E.observe(t);const s=document.createElement("td");let r;s.className="sa-var-manager-value",r="list"===this.scratchVariable.type?document.createElement("textarea"):document.createElement("input"),r.id=e,this.input=r,this.updateValue(!0),"list"===this.scratchVariable.type&&this.input.addEventListener("input",()=>this.resizeInputIfList(),!1);r.addEventListener("keydown",e=>{"Enter"!==e.key||e.shiftKey||e.target.blur()}),r.addEventListener("focusout",e=>{e.preventDefault(),"list"===this.scratchVariable.type?i.setVariableValue(this.target.id,this.scratchVariable.id,r.value.split("\n")):i.setVariableValue(this.target.id,this.scratchVariable.id,r.value),r.blur()}),r.addEventListener("focus",e=>{c=!0,l.classList.add("freeze")}),r.addEventListener("blur",e=>{c=!1,l.classList.remove("freeze")}),s.appendChild(r),t.appendChild(a),t.appendChild(s),this.handleSearch(o.value)}}function y(){var t,a,n;if(3!==(null===(t=e.tab.redux.state)||void 0===t||null===(a=t.scratchGui)||void 0===a||null===(n=a.editorTab)||void 0===n?void 0:n.activeTabIndex)||c)return;const l=i.runtime.getEditingTarget(),o=i.runtime.getTargetForStage();for(s=l.isStage?[]:Object.values(l.variables).filter(e=>""===e.type||"list"===e.type).map(e=>new A(e,l)),r=Object.values(o.variables).filter(e=>""===e.type||"list"===e.type).map(e=>new A(e,o)),I();g.firstChild;)g.removeChild(g.firstChild);for(;b.firstChild;)b.removeChild(b.firstChild);for(const e of s)g.appendChild(e.row),e.resizeInputIfList();for(const e of r)b.appendChild(e.row),e.resizeInputIfList()}function f(t){if(t){m.classList.add(e.tab.scratchClass("react-tabs_react-tabs__tab--selected"),e.tab.scratchClass("gui_is-selected"));document.querySelector("[class^=gui_tabs]").insertAdjacentElement("beforeend",l),y()}else m.classList.remove(e.tab.scratchClass("react-tabs_react-tabs__tab--selected"),e.tab.scratchClass("gui_is-selected")),l.remove(),s=[],r=[]}m.addEventListener("click",t=>{e.tab.redux.dispatch({type:"scratch-gui/navigation/ACTIVATE_TAB",activeTabIndex:3})}),e.tab.redux.initialize(),e.tab.redux.addEventListener("statechanged",({detail:t})=>{"scratch-gui/navigation/ACTIVATE_TAB"===t.action.type?f(3===t.action.activeTabIndex):"scratch-gui/mode/SET_PLAYER"===t.action.type&&(t.action.isPlayerOnly||3!==e.tab.redux.state.scratchGui.editorTab.activeTabIndex||queueMicrotask(()=>f(!0)))}),i.runtime.on("PROJECT_LOADED",()=>{try{y()}catch(e){a.error(e)}}),i.runtime.on("TOOLBOX_EXTENSIONS_NEED_UPDATE",()=>{try{y()}catch(e){a.error(e)}});const D=i.runtime._step;for(i.runtime._step=function(...t){const n=D.call(this,...t);try{!function(){var t,a,n;if(3===(null===(t=e.tab.redux.state)||void 0===t||null===(a=t.scratchGui)||void 0===a||null===(n=a.editorTab)||void 0===n?void 0:n.activeTabIndex)&&!c){for(const e of s)e.updateValue();for(const e of r)e.updateValue()}}()}catch(e){a.error(e)}return n},e.self.addEventListener("disabled",()=>{3===e.tab.redux.state.scratchGui.editorTab.activeTabIndex&&e.tab.redux.dispatch({type:"scratch-gui/navigation/ACTIVATE_TAB",activeTabIndex:2})});;)await e.tab.waitForElement("[class^='react-tabs_react-tabs__tab-list']",{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition:e=>!e.scratchGui.mode.isPlayerOnly}),e.tab.appendToSharedSpace({space:"afterSoundTab",element:m,order:3})},"style.css":a.n(n).a}}}]);