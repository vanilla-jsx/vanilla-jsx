(self.webpackChunk_vanilla_jsx_website=self.webpackChunk_vanilla_jsx_website||[]).push([[607],{469:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r=t(931),c=t(660),o=t.n(c);const a=function(e){var n=e.code,t=e.dependences,c=e.preview,a=void 0===c||c,s=Babel.transform(n,{presets:["env",["react",{runtime:"automatic",importSource:"@vanilla-jsx"}]]}).code;return(0,r.BX)(r.HY,{children:[(0,r.tZ)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/docsify/themes/vue.css"}),(0,r.BX)("div",{style:"color: #333; border: 1px solid #eee; display: flex",children:[(0,r.tZ)("pre",{style:"overflow: scroll; margin: 0; flex: 1;",children:(0,r.tZ)("code",{class:"language-javascript",ref:function(e){o().highlightElement(e)},children:n})}),a&&(0,r.tZ)("div",{style:"flex: 1; background: #fff;",children:(0,r.tZ)("iframe",{style:"border: none; height: 100%; margin: 0;",ref:function(e){e.setAttribute("srcdoc",function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).dependences,t=void 0===n?[]:n;return'\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    '.concat('<script src="https://unpkg.com/@vanilla-jsx/jsx-runtime@1.3.3/dist/main.js"><\/script>\n    <script src="https://unpkg.com/@vanilla-jsx/observer@1.3.3/dist/main.js"><\/script>',"\n    ").concat(t.map((function(e){return'<script src="'.concat(e,'"><\/script>')})),"\n    <script>\n        window.require = function(path) {\n            if (path === '@vanilla-jsx/jsx-runtime') {\n                return {\n                    jsxs: jsxs,\n                    jsx: jsx,\n                    Fragment: Fragment\n                }\n            } else if (path === '@vanilla-jsx/observer') {\n                return {\n                    rx: rx,\n                    createRxElement: createRxElement,\n                    observe: observe\n                }\n            }\n        }\n    <\/script>\n</head>\n<body>\n<script>\n").concat(e,"\n<\/script>\n</body>\n</html>\n")}(s,{dependences:t}))}})})]})]})}},607:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>l});var r=t(931),c=t(469);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i={};function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}(e,["components"]);return(0,r.BX)("wrapper",a(a(a({},i),t),{},{components:n,mdxType:"MDXLayout",children:[(0,r.tZ)("h1",{children:"create Offscreen Canvas"}),(0,r.tZ)(c.Z,{code:"const content = <canvas ref={(e) => {\n    const ctx = e.getContext('2d');\n    ctx.fillStyle = 'green';\n    ctx.fillRect(10, 10, 100, 100);\n    ctx.fillStyle = 'yellow';\n    ctx.fillText(\"Hello world\", 10, 50);\n    ctx.fillStyle = 'green';\n    ctx.fillRect(60, 60, 100, 100);\n    ctx.fillStyle = 'yellow';\n    ctx.fillText(\"Hello world\", 60, 100);\n}}></canvas>;\ndocument.body.append(content);",mdxType:"SourceCode"}),(0,r.tZ)("blockquote",{children:(0,r.tZ)("p",{parentName:"blockquote",children:"Pre-render similar primitives or repeating objects on an offscreen canvas"})}),(0,r.tZ)("p",{children:"If you find yourself repeating some of the same drawing operations on each animation frame, consider offloading them to an offscreen canvas. You can then render the offscreen image to your primary canvas as often as needed, without unnecessarily repeating the steps needed to generate it in the first place."}),(0,r.tZ)(c.Z,{code:"const offscreen = <canvas ref={(e) => {\n    const ctx = e.getContext('2d');\n    ctx.fillStyle = 'green';\n    ctx.fillRect(10, 10, 100, 100);\n    ctx.fillStyle = 'yellow';\n    ctx.fillText(\"Hello world\", 10, 50);\n}}></canvas>;\nconst content = <canvas ref={(e) => {\n    const ctx = e.getContext('2d');\n    ctx.drawImage(offscreen, 0, 0);\n    ctx.drawImage(offscreen, 50, 50);\n}}></canvas>;\ndocument.body.append(content);",mdxType:"SourceCode"}),(0,r.tZ)("h2",{children:"Observer"}),(0,r.tZ)(c.Z,{code:"import { rx, observe } from '@vanilla-jsx/observer';\nconst num = rx(0);\nsetInterval(() => {\n    num.value++;\n}, 1000);\nconst content = <canvas ref={(e) => {\n    const ctx = e.getContext('2d');\n    observe(() => {\n        ctx.clearRect(0, 0, e.width, e.height);\n        ctx.font = ".concat("`${num + 12}","px serif","`",";\n        ctx.fillText(num, 10, 30 + num);\n    });\n}}></canvas>;\ndocument.body.append(content);"),mdxType:"SourceCode"}),(0,r.tZ)("h2",{children:"Observer Canvas"}),(0,r.tZ)(c.Z,{code:"import { rx, createRxElement } from '@vanilla-jsx/observer';\nconst num = rx(0);\nconst Canvas = createRxElement('canvas');\nsetInterval(() => {\n    num.value++;\n}, 1000);\nconst content = <Canvas ref={(e) => {\n    const ctx = e.getContext('2d');\n    ctx.clearRect(0, 0, e.width, e.height);\n    ctx.font = ".concat("`${num + 12}","px serif","`",";\n    ctx.fillText(num, 10, 30 + num);\n}}></Canvas>;\ndocument.body.append(content);"),mdxType:"SourceCode"})]}))}l.isMDXComponent=!0}}]);