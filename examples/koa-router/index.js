import Koa from 'koa';
import KoaRouter from '@koa/router';
import { createJsxRouter, JsxMiddleWare } from '@vanilla-jsx/koa';

const app = new Koa();
const JsxRouter = createJsxRouter(new KoaRouter);

app.use(<JsxRouter.routes>
    <JsxMiddleWare use={() => console.log('doSomething')}></JsxMiddleWare>
    <JsxRouter.get path="/a" use={(ctx) => ctx.body = '/a'}></JsxRouter.get>
    <JsxRouter.get path="/b">
        <JsxMiddleWare use={(ctx) => ctx.body = '/b'}></JsxMiddleWare>
    </JsxRouter.get>
</JsxRouter.routes>);

app.listen(3000);
