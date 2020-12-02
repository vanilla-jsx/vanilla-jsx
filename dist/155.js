(self.webpackChunk_vanilla_jsx_website=self.webpackChunk_vanilla_jsx_website||[]).push([[155],{469:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(931),o=n(660),a=n.n(o);const i=function(e){var t=e.code,n=e.dependences,o=e.preview,i=void 0===o||o,c=Babel.transform(t,{presets:["env",["react",{runtime:"automatic",importSource:"@vanilla-jsx"}]]}).code;return(0,r.BX)(r.HY,{children:[(0,r.tZ)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/docsify/themes/vue.css"}),(0,r.BX)("div",{style:"color: #333; border: 1px solid #eee; display: flex",children:[(0,r.tZ)("pre",{style:"margin: 0; flex: 1;",children:(0,r.tZ)("code",{class:"language-javascript",ref:function(e){a().highlightElement(e)},children:t})}),i&&(0,r.tZ)("div",{style:"flex: 1; background: #fff;",children:(0,r.tZ)("iframe",{style:"border: none; height: 100%; margin: 0;",ref:function(e){e.setAttribute("srcdoc",function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).dependences,n=void 0===t?[]:t;return'\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    '.concat('<script src="https://unpkg.com/@vanilla-jsx/jsx-runtime@1.3.3/dist/main.js"><\/script>\n    <script src="https://unpkg.com/@vanilla-jsx/observer@1.3.3/dist/main.js"><\/script>',"\n    ").concat(n.map((function(e){return'<script src="'.concat(e,'"><\/script>')})),"\n    <script>\n        window.require = function(path) {\n            if (path === '@vanilla-jsx/jsx-runtime') {\n                return {\n                    jsxs: jsxs,\n                    jsx: jsx,\n                    Fragment: Fragment\n                }\n            } else if (path === '@vanilla-jsx/observer') {\n                return {\n                    rx: rx,\n                    createRxElement: createRxElement,\n                    observe: observe\n                }\n            }\n        }\n    <\/script>\n</head>\n<body>\n<script>\n").concat(e,"\n<\/script>\n</body>\n</html>\n")}(c,{dependences:n}))}})})]})]})}},155:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(931),o=n(469);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={};function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["components"]);return(0,r.BX)("wrapper",i(i(i({},s),n),{},{components:t,mdxType:"MDXLayout",children:[(0,r.tZ)("h1",{children:"可视化 Koa 中间件 - @vanilla-jsx/koa"}),(0,r.tZ)("p",{children:(0,r.tZ)("img",i({parentName:"p"},{src:"https://tu.sunpma.com/imgs/2020/11/d352677798dc5485.webp",alt:"Koa Middleware"}))}),(0,r.tZ)("blockquote",{children:(0,r.BX)("p",{parentName:"blockquote",children:["您应当先了解 ",(0,r.tZ)("a",i(i({parentName:"p"},{href:"https://github.com/koajs/koa"}),{},{children:"Koa"})),", 然后继续:"]})}),(0,r.tZ)(o.Z,{code:"import Koa from 'koa';\nimport { createJsxMiddleware } from '@vanilla-jsx/koa';\nconst app = new Koa();\nconst RegistryManager = createJsxMiddleware((ctx, next) => next());\nconst StatusCodeRedirect = createJsxMiddleware((ctx, next) => next());\nconst ErrorHandler = createJsxMiddleware((ctx, next) => next());\nconst CacheMiddleware = createJsxMiddleware((ctx, next) => next());\nconst SessionMiddleware = createJsxMiddleware((ctx, next) => next());\nconst RoutesMiddleware = createJsxMiddleware((ctx, next) => next());\nconst PylonsApp = createJsxMiddleware((ctx, next) => ctx.body = 'doSomething');\napp.use(<RegistryManager>\n    <StatusCodeRedirect>\n        <ErrorHandler>\n            <CacheMiddleware>\n                <SessionMiddleware>\n                    <RoutesMiddleware>\n                        <PylonsApp />\n                    </RoutesMiddleware>\n                </SessionMiddleware>\n            </CacheMiddleware>\n        </ErrorHandler>\n    </StatusCodeRedirect>\n</RegistryManager>);\napp.listen(3000);",preview:!1,mdxType:"SourceCode"}),(0,r.BX)("p",{children:["您可以自己尝试, 通过 ",(0,r.tZ)("a",i(i({parentName:"p"},{href:"https://github.com/vanilla-jsx/vanilla-jsx/tree/main/examples/koa-simple"}),{},{children:"koa-simple 源码"}))]}),(0,r.tZ)("h2",{children:"API"}),(0,r.tZ)("h3",{children:"createJsxMiddleware(middleware: Function): Component"}),(0,r.tZ)("blockquote",{children:(0,r.tZ)("p",{parentName:"blockquote",children:"组件返回一个 Koa 中间件."})}),(0,r.tZ)("h3",{children:"JsxMiddleware(props: { use: Function, children: Function }): Function"}),(0,r.BX)("blockquote",{children:[(0,r.tZ)("p",{parentName:"blockquote",children:"JsxMiddleware 是一个组件, 它返回一个 Koa 中间件."}),(0,r.tZ)("p",{parentName:"blockquote",children:"use 是一个 Koa 中间件."}),(0,r.tZ)("p",{parentName:"blockquote",children:"children 是一个 Koa 中间件."})]}),(0,r.tZ)(o.Z,{code:"import Koa from 'koa';\nimport { createJsxMiddleware } from '@vanilla-jsx/koa';\nconst app = new Koa();\napp.use(<JsxMiddleware use={(ctx, next) => next()}>\n    <JsxMiddleware use={(ctx, next) => ctx.body = 'doSomething'} />\n</JsxMiddleware>);\napp.listen(3000);",preview:!1,mdxType:"SourceCode"}),(0,r.BX)("h3",{children:["createJsxRouter(koaRouter: KoaRouter): { ","[ 'get' | 'put' | 'post' | 'patch' | 'delete' | 'del' | 'param' | 'use' ]",": Component }"]}),(0,r.BX)("blockquote",{children:[(0,r.BX)("p",{parentName:"blockquote",children:["您应当先了解 ",(0,r.tZ)("a",i(i({parentName:"p"},{href:"https://github.com/koajs/router"}),{},{children:"Koa Router"})),", 然后继续:"]}),(0,r.BX)("p",{parentName:"blockquote",children:["您可以自己尝试 ",(0,r.tZ)("a",i(i({parentName:"p"},{href:"https://github.com/vanilla-jsx/vanilla-jsx/tree/main/examples/koa-router"}),{},{children:"koa-router 源码"}))]})]}),(0,r.tZ)(o.Z,{code:"import Koa from 'koa';\nimport KoaRouter from '@koa/router';\nimport { createJsxRouter, JsxMiddleWare } from '@vanilla-jsx/koa';\nconst app = new Koa();\nconst JsxRouter = createJsxRouter(new KoaRouter);\napp.use(<JsxRouter.routes>\n    <JsxMiddleWare use={() => console.log('doSomething')}></JsxMiddleWare>\n    <JsxRouter.get path=\"/a\" use={(ctx) => ctx.body = '/a'}></JsxRouter.get>\n    <JsxRouter.post path=\"/b\">\n        <JsxMiddleWare use={(ctx) => ctx.body = '/b'}></JsxMiddleWare>\n    </JsxRouter.post>\n</JsxRouter.routes>);\napp.listen(3000);",preview:!1,mdxType:"SourceCode"})]}))}l.isMDXComponent=!0}}]);