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
