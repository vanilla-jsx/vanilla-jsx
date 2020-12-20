const flatten = require('lodash.flattendeep');

exports.createRouter = () => {
    const router = {
        routes({ children }) {
            return async (ctx) => {
                children = Array.isArray(children) ? flatten(children) : [children];

                await Promise.all(children.forEach(async (child) => {
                    if(!child) {

                    } else if (typeof child === 'function') {
                        await child(ctx);
                    }
                }));

                return ctx.body;
            }
        },
        route({ Component, children }) {
            return (ctx) => {
                if (!Component) {
                    children = Array.isArray(children) ? flatten(children) : [children];

                    ctx.body = children;
                } else {
                    ctx.body = Component(ctx);
                }
            }
        }
    };

    return router;
}