exports.jsxs = exports.jsx = (tag, { children, ...props } = {}) => {
    if (typeof tag === 'string') {
        const element = document.createElement(tag);

        Object.keys(props).forEach((key) => {
            element.setAttribute(key, props[key])
        });

        if (!children) {

        } else if (children instanceof Array) {
            children.forEach((child) => {
                element.append(child);
            });
        } else {
            element.append(children);
        }

        return element;
    } else if (typeof tag === 'function') {
        return tag({ children, ...props });
    } else {
        console.error('未知 tag 类型', tag);
    }
}

exports.Fragment = ({ children } = {}) => {
    const element = document.createDocumentFragment();

    if (!children) {

    } else if (children instanceof Array) {
        children.forEach((child) => {
            element.append(child);
        });
    } else {
        element.append(children);
    }

    return element;
}
