(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[27],{1544:function(o,t,n){(o.exports=n(9)(!1)).push([o.i,'path.blocklyBlockBackground[fill="#FF6680"],\npath.blocklyBlockBackground[fill="#5CB1D6"],\npath.blocklyBlockBackground[fill="#FFBF00"],\npath.blocklyBlockBackground[fill="#29beb8"],\ng[data-category] > path.blocklyBlockBackground {\n  stroke: #0003;\n}\ng[data-argument-type="dropdown"] > path,\ng[data-argument-type="variable"] > path,\npath[data-argument-type="boolean"],\ng[data-shapes="c-block c-1 hat"] > g[data-shapes="stack"]:not(.blocklyDraggable) > path /* block preview in define block */ {\n  stroke: #0003;\n  fill: #0001;\n}\ng[data-argument-type="dropdown"] > rect,\ng[data-argument-type="variable"] > rect {\n  stroke: #0003;\n  fill: #0000;\n}\ng[data-argument-type*="text"] > path,\n[data-category] g > line {\n  stroke: #0002;\n}\n.scratchCategoryItemBubble {\n  border-color: #0003 !important;\n}\n\n.fieldTextInput {\n  border-color: #0003 !important;\n}\n\n.blocklyBlockBackground[fill="#FFFFFF"] {\n  fill: var(--editorTheme3-inputColor);\n}\n.blocklyEditableText > text {\n  fill: var(--editorTheme3-inputColor-text);\n}\n.blocklyHtmlInput {\n  background-color: var(--editorTheme3-inputColor);\n  color: var(--editorTheme3-inputColor-text);\n}\n',""])},1591:function(o,t,n){"use strict";function a(o){return{r:parseInt(o.substring(1,3),16),g:parseInt(o.substring(3,5),16),b:parseInt(o.substring(5,7),16),a:o.length>=9?parseInt(o.substring(7,9),16)/255:1}}function c(o){return 1===(o=Math.round(o).toString(16)).length?"0".concat(o):o}function r(o){const t=c(o.r),n=c(o.g),a=c(o.b),r=void 0!==o.a?c(255*o.a):"";return"#".concat(t).concat(n).concat(a).concat(r)}function l(o){const{r:t,g:n,b:c}=a(o);return.299*t+.587*n+.114*c}function e(o,t,n,a){return"number"!=typeof(a=void 0!==a?a:170)&&(a=l(a)),l(o)>a?void 0!==t?t:"#575e75":void 0!==n?n:"#ffffff"}function i(o,t){const{r:n,g:c,b:l,a:e}=a(o);return void 0===t.r&&(t.r=1),void 0===t.g&&(t.g=1),void 0===t.b&&(t.b=1),void 0===t.a&&(t.a=1),r({r:t.r*n,g:t.g*c,b:t.b*l,a:t.a*e})}function d(o,t){document.documentElement.style.setProperty("--editorTheme3-inputColor-text",e(o.settings.get("input-color")));var n="";const a=o.settings.get("text");"black"===a&&(n+="\n      .blocklyText {\n        fill: #575e75;\n      }\n      .blocklyDropdownText {\n        fill: #575e75 !important;\n      }\n      .blocklyDropDownDiv .goog-menuitem,\n      #s3devIDD > li {\n        color: #575e75;\n      }"),"colorOnWhite"===a&&(n+='\n      .blocklyDropDownDiv:not([style*="rgb(255, 255, 255)"]) .goog-menuitem {\n        color: #575e75;\n      }'),"colorOnBlack"===a&&(n+='\n      .blocklyDropDownDiv:not([style*="rgb(255, 255, 255)"]) .goog-option-selected .goog-menuitem-checkbox {\n        filter: brightness(0) invert(1);\n      }\n      .u-dropdown-searchbar {\n        border-color: rgba(255, 255, 255, 0.15);\n      }');var c={motion:{color:"#4C97FF",tertiaryColor:"#3373CC"},looks:{color:"#9966FF",tertiaryColor:"#774DCB"},sounds:{color:"#CF63CF",tertiaryColor:"#BD42BD",alt:"sound"},events:{color:"#DE9E2E",tertiaryColor:"#CC9900"},control:{color:"#FFBF00",tertiaryColor:"#CF8B17"},sensing:{color:"#5CB1D6",tertiaryColor:"#2E8EB8"},operators:{color:"#59C059",tertiaryColor:"#389438"},data:{color:"#FF8C1A",tertiaryColor:"#DB6E00",alt:"variables"},"data-lists":{color:"#FF661A",tertiaryColor:"#E64D00",alt:"lists",var:"dataLists"},custom:{color:"#FF6680",tertiaryColor:"#FF6355",alt:"myBlocks"},Pen:{color:"#0FBD8C",tertiaryColor:"#0B8E69",alt:"pen"},TurboWarp:{color:"#ff4c4c",tertiaryColor:"#e64444",alt:"tw",var:"tw"},sa:{color:"#29beb8",tertiaryColor:"#3aa8a4",alt:"a-b"}};for(var r of Object.keys(c)){var l=c[r].var?c[r].var:r,d="TurboWarp"===r?"tw":r;if("white"===a||"black"===a){let t=i(o.settings.get(d+"-color"),{r:.8,g:.8,b:.8});n+='g[data-category="'.concat(r,'"] > path.blocklyBlockBackground {\n        fill: var(--editorTheme3-').concat(l,"Color);\n        ").concat("black"===a?"--sa-block-text-color: #575e75;":"",'\n      }\n      .blocklyBlockBackground[fill="').concat(c[r].tertiaryColor,'"] /* open dropdown */ {\n        fill: #0003;\n      }\n      .scratchCategoryId-').concat(c[r].alt?c[r].alt:r," > .scratchCategoryItemBubble {\n        background-color: var(--editorTheme3-").concat(l,'Color) !important;\n      }\n      .blocklyDropDownDiv[data-category="').concat(r,'"]:not([style*="rgb(255, 255, 255)"]) {\n        background-color: var(--editorTheme3-').concat(l,'Color) !important;\n        border-color: #0003 !important;\n      }\n      .blocklyBubbleCanvas [stroke="').concat(c[r].tertiaryColor,'"] {\n        stroke: var(--editorTheme3-').concat(l,"Color);\n      }\n      #s3devIDD > li.").concat(r," {\n        background-color: var(--editorTheme3-").concat(l,"Color);\n      }\n      #s3devIDD > li.").concat(r,":hover,\n      #s3devIDD > li.").concat(r,".sel {\n        background-color: ").concat(t,';\n      }\n      .sa-debugger-block-preview[data-category="').concat(r,'"] {\n        background-color: var(--editorTheme3-').concat(l,"Color) !important;\n      }\n      "),"custom"===r&&(n+='path.blocklyBlockBackground[fill="#FF6680"] {\n          fill: var(--editorTheme3-'.concat(r,"Color);\n          ").concat("black"===a?"--sa-block-text-color: #575e75;":"","\n        }\n        #s3devIDD > li.null {\n          background-color: var(--editorTheme3-").concat(l,"Color);\n        }\n        #s3devIDD > li.null:hover,\n        #s3devIDD > li.null.sel {\n          background-color: ").concat(t,";\n        }")),"sensing"===r&&(n+='path.blocklyBlockBackground[fill="#5CB1D6"] {\n          fill: var(--editorTheme3-'.concat(r,"Color);\n          ").concat("black"===a?"--sa-block-text-color: #575e75;":"","\n        }")),"events"===r&&(n+='path.blocklyBlockBackground[fill="#FFBF00"] {\n          fill: var(--editorTheme3-'.concat(r,"Color);\n          ").concat("black"===a?"--sa-block-text-color: #575e75;":"",'\n        }\n        .blocklyDropDownDiv[style*="rgb(255, 191, 0)"] {\n          background-color: var(--editorTheme3-').concat(r,"Color) !important;\n          border-color: #0003 !important;\n        }")),"Pen"===r&&(n+='path.blocklyBlockBackground[fill="#0FBD8C"] {\n          fill: var(--editorTheme3-'.concat(r,"Color);\n          ").concat("black"===a?"--sa-block-text-color: #575e75;":"",'\n        }\n        .blocklyDropDownDiv[style*="rgb(15, 189, 140)"] {\n          background-color: var(--editorTheme3-').concat(r,"Color) !important;\n          border-color: #0003 !important;\n        }\n        #s3devIDD > li.extension {\n          background-color: var(--editorTheme3-").concat(l,"Color);\n        }\n        #s3devIDD > li.extension:hover,\n        #s3devIDD > li.extension.sel {\n          background-color: ").concat(t,";\n        }")),"sa"===r&&(n+='path.blocklyBlockBackground[fill="#29beb8"] {\n          fill: var(--editorTheme3-'.concat(r,"Color);\n          ").concat("black"===a?"--sa-block-text-color: #575e75;":"","\n        }"))}else{let t={colorOnWhite:"#fff",colorOnBlack:"#282828"}[a],e={colorOnWhite:"#00000026",colorOnBlack:"#fff3"}[a],g=i(o.settings.get(d+"-color"),{a:.15}),k=i(o.settings.get(d+"-color"),{a:.25}),b={colorOnWhite:"#575e75",colorOnBlack:"#fff"}[a];n+='g[data-category="'.concat(r,'"] > path.blocklyBlockBackground,\n      g[data-category="').concat(r,'"] > g[data-argument-type="dropdown"] > rect,\n      g[data-category="').concat(r,'"] > g[data-argument-type="variable"] > rect {\n        fill: ').concat(t,";\n        stroke: var(--editorTheme3-").concat(l,"Color);\n        --sa-block-text-color: ").concat(b,";\n        --sa-block-secondary-color: ").concat(k,';\n      }\n      g[data-category="').concat(r,'"] > .blocklyText,\n      g[data-category="').concat(r,'"] > g:not([data-id]) > .blocklyText /* variable and list reporters */ {\n        fill: var(--editorTheme3-').concat(l,'Color);\n      }\n      g[data-category="').concat(r,'"] > g[data-argument-type="dropdown"] > .blocklyDropdownText,\n      g[data-category="').concat(r,'"] > g[data-argument-type="variable"] > .blocklyDropdownText,\n      g[data-category="').concat(r,'"] > g[data-argument-type="dropdown"] > g > .blocklyDropdownText {\n        fill: var(--editorTheme3-').concat(l,'Color) !important;\n      }\n      g[data-category="').concat(r,'"] > g[data-argument-type="dropdown"] > path,\n      g[data-category="').concat(r,'"] > g[data-argument-type="variable"] > path,\n      g[data-category="').concat(r,'"] > path[data-argument-type="boolean"] {\n        fill: ').concat(g,";\n        stroke: var(--editorTheme3-").concat(l,'Color);\n      }\n      .blocklyBlockBackground[fill="').concat(c[r].tertiaryColor,'"] /* open dropdown */ {\n        fill: ').concat(k," !important;\n      }\n      .scratchCategoryId-").concat(c[r].alt?c[r].alt:r," > .scratchCategoryItemBubble {\n        background-color: var(--editorTheme3-").concat(l,'Color) !important;\n      }\n      .blocklyDropDownDiv[data-category="').concat(r,'"]:not([style*="rgb(255, 255, 255)"]) {\n        background-color: ').concat(t," !important;\n        border-color: var(--editorTheme3-").concat(l,'Color) !important;\n      }\n      .blocklyDropDownDiv[data-category="').concat(r,'"] .goog-menuitem-highlight {\n        background-color: ').concat(k,';\n      }\n      .blocklyBubbleCanvas [stroke="').concat(c[r].tertiaryColor,'"],\n      g[data-category=').concat(r,'] > g[data-argument-type*="text"] > path,\n      g[data-category=').concat(r,"] > g > line  {\n        stroke: var(--editorTheme3-").concat(l,'Color);\n      }\n      .blocklyWidgetDiv.fieldTextInput[style*="box-shadow"] {\n        box-shadow: 0 0 0 4px ').concat(e," !important;\n      }\n      #s3devIDD > li.").concat(r," {\n        background-color: ").concat(g,";\n        color: var(--editorTheme3-").concat(l,"Color);\n      }\n      #s3devIDD > li.").concat(r,":hover,\n      #s3devIDD > li.").concat(r,".sel {\n        background-color: ").concat(k,";\n      }"),"custom"===r&&(n+='path.blocklyBlockBackground[fill="#FF6680"] {\n          fill: '.concat(t,";\n          stroke: var(--editorTheme3-").concat(r,"Color);\n          --sa-block-text-color: ").concat(b,";\n          --sa-block-secondary-color: ").concat(k,';\n        }\n        path.blocklyBlockBackground[fill="#FF6680"] ~ .blocklyText,\n        g[data-shapes="c-block c-1 hat"] > g[data-shapes="stack"]:not(.blocklyDraggable) > .blocklyText,\n        .blocklyEditableText > rect[fill="#FF3355"] ~ .blocklyText {\n          fill: var(--editorTheme3-').concat(r,'Color);\n        }\n        path.blocklyBlockBackground[fill="#FF6680"] ~ [data-argument-type="text"] > path {\n          stroke: var(--editorTheme3-').concat(r,'Color);\n        }\n        g[data-shapes="c-block c-1 hat"] > g[data-shapes="stack"]:not(.blocklyDraggable) > path,\n        path[data-argument-type="boolean"][fill="#FF3355"] {\n          fill: ').concat(g,";\n          stroke: var(--editorTheme3-").concat(r,'Color);\n        }\n        .blocklyEditableText > rect[fill="#FF3355"] {\n          fill: ').concat(g,";\n        }\n        #s3devIDD > li.null {\n          background-color: ").concat(g,";\n          color: var(--editorTheme3-").concat(l,"Color);\n        }\n        #s3devIDD > li.null:hover,\n        #s3devIDD > li.null.sel {\n          background-color: ").concat(k,";\n        }")),"sensing"===r&&(n+='path.blocklyBlockBackground[fill="#5CB1D6"],\n        g[data-argument-type="dropdown"] > rect[fill="#5CB1D6"] {\n          fill: '.concat(t,";\n          stroke: var(--editorTheme3-").concat(r,"Color);\n          --sa-block-text-color: ").concat(b,";\n          --sa-block-secondary-color: ").concat(k,';\n        }\n        g[data-argument-type="dropdown"] > path[fill="#47A8D1"] {\n          fill: ').concat(g,";\n          stroke: var(--editorTheme3-").concat(r,'Color);\n        }\n        path.blocklyBlockBackground[fill="#5CB1D6"] ~ .blocklyText {\n          fill: var(--editorTheme3-').concat(r,'Color);\n        }\n        g[data-argument-type="dropdown"] > rect[fill="#5CB1D6"] ~ .blocklyText,\n        g[data-argument-type="dropdown"] > rect[fill="#2E8EB8"] ~ .blocklyText,\n        g[data-argument-type="dropdown"] > path[fill="#47A8D1"] ~ * > .blocklyText,\n        g[data-argument-type="dropdown"] > path[fill="#2E8EB8"] ~ * > .blocklyText {\n          fill: var(--editorTheme3-').concat(r,'Color) !important;\n        }\n        .blocklyDropDownDiv[style*="rgb(92, 177, 214)"] {\n          background-color: ').concat(t," !important;\n          border-color: var(--editorTheme3-").concat(l,'Color) !important;\n        }\n        .blocklyDropDownDiv[style*="rgb(92, 177, 214)"] .goog-menuitem-highlight {\n          background-color: ').concat(k,";\n        }")),"events"===r&&(n+='path.blocklyBlockBackground[fill="#FFBF00"],\n        g[data-argument-type="dropdown"] > rect[fill="#FFBF00"],\n        g[data-argument-type="dropdown"] > rect[fill="#CC9900"] {\n          fill: '.concat(t,";\n          stroke: var(--editorTheme3-").concat(l,"Color);\n          --sa-block-text-color: ").concat(b,";\n          --sa-block-secondary-color: ").concat(k,';\n        }\n        path.blocklyBlockBackground[fill="#FFBF00"] ~ .blocklyText {\n          fill: var(--editorTheme3-').concat(r,'Color);\n        }\n        path.blocklyBlockBackground[fill="#FFBF00"] ~ g[data-argument-type="variable"] > g > .blocklyDropdownText {\n          fill: var(--editorTheme3-').concat(r,'Color) !important;\n        }\n        g[data-argument-type="dropdown"] > rect[fill="#FFBF00"] ~ .blocklyText,\n        g[data-argument-type="dropdown"] > rect[fill="#CC9900"] ~ .blocklyText {\n          fill: var(--editorTheme3-').concat(r,'Color) !important;\n        }\n        .blocklyDropDownDiv[style*="rgb(255, 191, 0)"] {\n          background-color: ').concat(t," !important;\n          border-color: var(--editorTheme3-").concat(l,'Color) !important;\n        }\n        .blocklyDropDownDiv[style*="rgb(255, 191, 0)"] .goog-menuitem-highlight {\n          background-color: ').concat(k,";\n        }")),"Pen"===r&&(n+='g[data-category] /* specificity */ > path.blocklyBlockBackground[fill="#0FBD8C"] {\n          fill: '.concat(t,";\n          stroke: var(--editorTheme3-").concat(r,"Color);\n          --sa-block-text-color: ").concat(b,";\n          --sa-block-secondary-color: ").concat(k,';\n        }\n        path.blocklyBlockBackground[fill="#0FBD8C"] ~ .blocklyText {\n          fill: var(--editorTheme3-').concat(r,'Color);\n        }\n        path.blocklyBlockBackground[fill="#0FBD8C"] ~ g[data-argument-type="dropdown"] > g > .blocklyDropdownText {\n          fill: var(--editorTheme3-').concat(r,'Color) !important;\n        }\n        g[data-argument-type="dropdown"] > path[fill="#0DA57A"] {\n          fill: ').concat(g,";\n          stroke: var(--editorTheme3-").concat(r,'Color);\n        }\n        .blocklyDropDownDiv[style*="rgb(15, 189, 140)"] {\n          background-color: ').concat(t," !important;\n          border-color: var(--editorTheme3-").concat(l,'Color) !important;\n        }\n        .blocklyDropDownDiv[style*="rgb(15, 189, 140)"] .goog-menuitem-highlight {\n          background-color: ').concat(k,';\n        }\n        path.blocklyBlockBackground[fill="#0FBD8C"] ~ [data-argument-type="text"] > path,\n        path.blocklyBlockBackground[fill="#0FBD8C"] ~ g > line  {\n          stroke: var(--editorTheme3-').concat(r,"Color);\n        }\n        #s3devIDD > li.extension {\n          background-color: ").concat(g,";\n          color: var(--editorTheme3-").concat(l,"Color);\n        }\n        #s3devIDD > li.extension:hover,\n        #s3devIDD > li.extension.sel {\n          background-color: ").concat(k,";\n        }")),"sa"===r&&(n+='path.blocklyBlockBackground[fill="#29beb8"] {\n          fill: '.concat(t,";\n          stroke: var(--editorTheme3-").concat(r,"Color);\n          --sa-block-text-color: ").concat(b,";\n          --sa-block-secondary-color: ").concat(k,';\n        }\n        path.blocklyBlockBackground[fill="#29beb8"] ~ .blocklyText {\n          fill: var(--editorTheme3-').concat(r,'Color);\n        }\n        path.blocklyBlockBackground[fill="#29beb8"] ~ [data-argument-type="text"] > path {\n          stroke: var(--editorTheme3-').concat(r,"Color);\n        }"))}}document.documentElement.style.setProperty("--editorTheme3-inputColor-text",e(o.settings.get("input-color"))),t.textContent=n}n.r(t),n.d(t,"resources",(function(){return k}));var g=n(1544);const k={"theme3.js":async function({addon:o,global:t,console:n}){const a=document.querySelector("[data-addon-id='".concat(o.self.id,"']")),c=document.createElement("style");d(o,c),o.settings.addEventListener("change",()=>{d(o,c)}),c.className="scratch-addons-style",c.setAttribute("data-addon-id",o.self.id),c.setAttribute("data-addon-index",a.getAttribute("data-addon-index")),a.parentElement.insertBefore(c,a.nextSibling),o.self.addEventListener("reenabled",()=>c.disabled=!1)},"theme3.css":n.n(g).a}}}]);