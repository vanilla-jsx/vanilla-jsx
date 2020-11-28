import Koa from 'koa';
import { createJsxMiddleware, JsxMiddleWare } from '@vanilla-jsx/koa';

const app = new Koa();

const Ax = createJsxMiddleware((ctx, next) => {
    console.log('A.1');
    next();
    console.log('A.2');
});
const Bx = createJsxMiddleware((ctx, next) => {
    console.log('B.1');
    ctx.body = 'bolt';
});

app.use(<JsxMiddleWare use={(ctx, next) => {
    console.log('x.1');
    next();
    console.log('x.2');
}}>
    <Ax>
        <Bx></Bx>
    </Ax>
</JsxMiddleWare>);

app.listen(3000);
