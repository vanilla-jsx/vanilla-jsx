(self.webpackChunk_vanilla_jsx_website=self.webpackChunk_vanilla_jsx_website||[]).push([[380],{469:(e,n,t)=>{"use strict";t.d(n,{Z:()=>l});var r=t(931),o=t(660),c=t.n(o);const l=function(e){var n=e.code,t=e.dependences,o=e.preview,l=void 0===o||o,i=Babel.transform(n,{presets:["env",["react",{runtime:"automatic",importSource:"@vanilla-jsx"}]]}).code;return(0,r.BX)(r.HY,{children:[(0,r.tZ)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/docsify/themes/vue.css"}),(0,r.BX)("div",{style:"color: #333; border: 1px solid #eee; display: flex",children:[(0,r.tZ)("pre",{style:"overflow: scroll; margin: 0; flex: 1;",children:(0,r.tZ)("code",{class:"language-javascript",ref:function(e){c().highlightElement(e)},children:n})}),l&&(0,r.tZ)("div",{style:"flex: 1; background: #fff;",children:(0,r.tZ)("iframe",{style:"border: none; height: 100%; margin: 0;",ref:function(e){e.setAttribute("srcdoc",function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).dependences,t=void 0===n?[]:n;return'\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    '.concat('<script src="https://unpkg.com/@vanilla-jsx/jsx-runtime@1.3.3/dist/main.js"><\/script>\n    <script src="https://unpkg.com/@vanilla-jsx/observer@1.3.3/dist/main.js"><\/script>',"\n    ").concat(t.map((function(e){return'<script src="'.concat(e,'"><\/script>')})),"\n    <script>\n        window.require = function(path) {\n            if (path === '@vanilla-jsx/jsx-runtime') {\n                return {\n                    jsxs: jsxs,\n                    jsx: jsx,\n                    Fragment: Fragment\n                }\n            } else if (path === '@vanilla-jsx/observer') {\n                return {\n                    rx: rx,\n                    createRxElement: createRxElement,\n                    observe: observe\n                }\n            }\n        }\n    <\/script>\n</head>\n<body>\n<script>\n").concat(e,"\n<\/script>\n</body>\n</html>\n")}(i,{dependences:t}))}})})]})]})}},380:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});var r=t(931),o=t(469);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s={};function a(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["components"]);return(0,r.BX)("wrapper",l(l(l({},s),t),{},{components:n,mdxType:"MDXLayout",children:[(0,r.tZ)("h1",{children:"响应式 - @vanilla-jsx/observer"}),(0,r.tZ)("blockquote",{children:(0,r.tZ)("p",{parentName:"blockquote",children:"就像 React / Vue 那样."})}),(0,r.tZ)(o.Z,{code:"import { rx, createRxElement } from '@vanilla-jsx/observer';\nconst Div = createRxElement('div');\nconst someThing = rx(0);\nsetInterval(() => {\n    someThing.value++;\n}, 1000);\ndocument.body.append(<Div>setInterval: {someThing}</Div>);",mdxType:"SourceCode"}),(0,r.tZ)("h2",{children:"安装"}),(0,r.tZ)("pre",{children:(0,r.tZ)("code",l(l({parentName:"pre"},{className:"language-bash"}),{},{children:"npm i @vanilla-jsx/observer\n"}))}),(0,r.tZ)("h2",{children:"API"}),(0,r.BX)("blockquote",{children:[(0,r.BX)("p",{parentName:"blockquote",children:["继承自 ",(0,r.tZ)("a",l(l({parentName:"p"},{href:"https://github.com/nx-js/observer-util"}),{},{children:"@nx-js/observer-util"})),", 导出 { observable, isObservable, observe, unobserve, raw }"]}),(0,r.tZ)("p",{parentName:"blockquote",children:"并添加 { createRxElement, rx }"})]}),(0,r.tZ)("h3",{children:"createRxElement(htmlTag: String): Function"}),(0,r.tZ)("blockquote",{children:(0,r.tZ)("p",{parentName:"blockquote",children:"创建一个自定义组件用于支持响应式属性或响应式子元素."})}),(0,r.tZ)(o.Z,{code:"import { rx, createRxElement } from '@vanilla-jsx/observer';\nconst Button = createRxElement('button');\nconst Input = createRxElement('input');\nconst CustomComponent = () => {\n    const someThing = rx(0);\n    return <>\n        <Button ref={(ele) => {\n            ele.addEventListener('click', () => {\n                someThing.value++;\n            });\n        }}>click me: {someThing}</Button>\n        <Input value={someThing} />\n    </>;\n};\ndocument.body.append(<CustomComponent />);",mdxType:"SourceCode"}),(0,r.tZ)("h3",{children:"rx(value: undefined | null | Number | String): Observable"}),(0,r.tZ)("blockquote",{children:(0,r.tZ)("p",{parentName:"blockquote",children:"创建一个响应式状态用于属性或子元素"})}),(0,r.tZ)("h3",{children:"rx(value: Object | Array): Observable"}),(0,r.tZ)("blockquote",{children:(0,r.tZ)("p",{parentName:"blockquote",children:"创建一个响应式状态用于深度 JSON."})}),(0,r.tZ)("h3",{children:"rx(computed: () => (undefined | null | Number | String)): Observable"}),(0,r.tZ)("blockquote",{children:(0,r.tZ)("p",{parentName:"blockquote",children:"作为一个计算值返回一个响应式属性或响应式子元素."})}),(0,r.tZ)(o.Z,{code:"import { rx, createRxElement } from '@vanilla-jsx/observer';\nconst Button = createRxElement('button');\nconst Input = createRxElement('input');\nconst CustomComponent = () => {\n    const someThing = rx(0);\n    return <>\n        <Button ref={(ele) => {\n            ele.addEventListener('click', () => {\n                someThing.value++;\n            });\n        }}>click me: {someThing}</Button>\n        <Input value={rx(() => 'computed value:' + someThing)} />\n    </>;\n};\ndocument.body.append(<CustomComponent />);",mdxType:"SourceCode"})]}))}a.isMDXComponent=!0}}]);