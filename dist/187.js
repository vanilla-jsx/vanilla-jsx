(self.webpackChunk_vanilla_jsx_website=self.webpackChunk_vanilla_jsx_website||[]).push([[187],{469:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(931),c=t(660),i=t.n(c);const o=function(e){var n=e.code,t=e.dependences,c=e.preview,o=void 0===c||c,s=Babel.transform(n,{presets:["env",["react",{runtime:"automatic",importSource:"@vanilla-jsx"}]]}).code;return(0,r.BX)(r.HY,{children:[(0,r.tZ)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/docsify/themes/vue.css"}),(0,r.BX)("div",{style:"color: #333; border: 1px solid #eee; display: flex",children:[(0,r.tZ)("pre",{style:"margin: 0; flex: 1;",children:(0,r.tZ)("code",{class:"language-javascript",ref:function(e){i().highlightElement(e)},children:n})}),o&&(0,r.tZ)("div",{style:"flex: 1; background: #fff;",children:(0,r.tZ)("iframe",{style:"border: none; height: 100%; margin: 0;",ref:function(e){e.setAttribute("srcdoc",function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).dependences,t=void 0===n?[]:n;return'\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    '.concat('<script src="https://unpkg.com/@vanilla-jsx/jsx-runtime@1.3.3/dist/main.js"><\/script>\n    <script src="https://unpkg.com/@vanilla-jsx/observer@1.3.3/dist/main.js"><\/script>',"\n    ").concat(t.map((function(e){return'<script src="'.concat(e,'"><\/script>')})),"\n    <script>\n        window.require = function(path) {\n            if (path === '@vanilla-jsx/jsx-runtime') {\n                return {\n                    jsxs: jsxs,\n                    jsx: jsx,\n                    Fragment: Fragment\n                }\n            } else if (path === '@vanilla-jsx/observer') {\n                return {\n                    rx: rx,\n                    createRxElement: createRxElement,\n                    observe: observe\n                }\n            }\n        }\n    <\/script>\n</head>\n<body>\n<script>\n").concat(e,"\n<\/script>\n</body>\n</html>\n")}(s,{dependences:t}))}})})]})]})}},187:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var r=t(931),c=t(469);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d={};function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}(e,["components"]);return(0,r.BX)("wrapper",o(o(o({},d),t),{},{components:n,mdxType:"MDXLayout",children:[(0,r.tZ)("h1",{children:"使用 jquery, 但不使用选择器"}),(0,r.tZ)("blockquote",{children:(0,r.tZ)("p",{parentName:"blockquote",children:"使用 $(dom) 转换成 jQuery 对象, 更快, 更低成本."})}),(0,r.tZ)(c.Z,{code:"const $content = $(<div>This is content.</div>);\n$content.appendTo(document.body);",dependences:["https://unpkg.com/jquery@3.5.1/dist/jquery.slim.min.js"],mdxType:"SourceCode"}),(0,r.tZ)("h2",{children:"速度测试"}),(0,r.tZ)(c.Z,{code:"document.body.append(<div id=\"content\">This is content.</div>);\nfor (let index = 0; index < 6; index++) {\n    const t1 = performance.now();\n    for (let index = 0; index < 10000; index++) {\n        const $content = $(<div>This is content.</div>);\n    }\n    document.body.append(<div>jsx create time: {performance.now() - t1}</div>);\n    const t2 = performance.now();\n    for (let index = 0; index < 10000; index++) {\n        const $content = $('<div>This is content.</div>');\n    }\n    document.body.append(<div>jquery create time: {performance.now() - t2}</div>);\n}",dependences:["https://unpkg.com/jquery@3.5.1/dist/jquery.slim.min.js"],mdxType:"SourceCode"}),(0,r.tZ)("h2",{children:"嵌套 dom 添加事件监听"}),(0,r.tZ)(c.Z,{code:"const refs = {};\nconst content = <div>\n    <p ref={p => refs.p = p}>This is content.</p>\n    <button ref={(e) => {\n        $(e).on('click', () => {\n            $(refs.p).text('clicked');\n        });\n    }}>click me</button>\n</div>;\ndocument.body.append(content)",dependences:["https://unpkg.com/jquery@3.5.1/dist/jquery.slim.min.js"],mdxType:"SourceCode"})]}))}p.isMDXComponent=!0}}]);