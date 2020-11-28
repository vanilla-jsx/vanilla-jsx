function createJsxMiddleware (m) {
    return ({ children }) => {
        return (ctx, next) => {
            return m(ctx, async () => {
                if (children instanceof Array) {
                    for (let index = 0; index < children.length; index++) {
                        if (typeof children[index] === 'function') {
                            await children[index](ctx);
                        }
                    }
                } else if (typeof children === 'function') {
                    await children(ctx);
                }
                if (typeof next === 'function') {
                    await next();
                }
            });
        }
    }
}

exports.createJsxMiddleware = createJsxMiddleware;

exports.JsxMiddleWare = function ({ use, children }) {
    return createJsxMiddleware(use)({ children });
}

exports.createJsxRouter = function (koaRouter) {
    const JsxRouter = {
        routes({ prefix, allowedMethods, children }) {
            const Routes = createJsxMiddleware(async (ctx, next) => {
                if (prefix) {
                    koaRouter.prefix(prefix);
                }
                if (children instanceof Array) {
                    for (let index = 0; index < children.length; index++) {
                        if (typeof children[index] === 'function') {
                            await children[index](ctx);
                        }
                    }
                } else if (typeof children === 'function') {
                    await children(ctx);
                }
                await next();
            });
            const BindRoutes = createJsxMiddleware(koaRouter.routes());
            const AllowedMethods = createJsxMiddleware(koaRouter.allowedMethods(allowedMethods));
            return Routes({
                children: BindRoutes({
                    children: AllowedMethods
                })
            });
        }
    };

    [ 'get', 'put', 'post', 'patch', 'delete', 'del', 'param', 'use' ].forEach((method) => {
        JsxRouter[method] = ({ path, use = (ctx, next) => next(), children = [] }) => {
            return () => {
                if (children instanceof Array) {
                    koaRouter[method](path, use, ...children);
                } else if (typeof children === 'function') {
                    koaRouter[method](path, use, children);
                }
            };
        }
    });

    return JsxRouter;
}