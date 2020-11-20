exports.jsxs = exports.jsx = (tag, { ref, children, ...props } = {}) => {
    if (typeof tag === 'string') {
        const element = document.createElement(tag);

        Object.keys(props).forEach((key) => {
            if (props[key]) {
                element.setAttribute(key, props[key])
            }
        });

        if (!children) {

        } else if (children instanceof Array) {
            children.forEach((child) => {
                element.append(child);
            });
        } else {
            element.append(children);
        }

        if (!ref) {

        } else if (typeof ref === 'function') {
            ref(element);
        } else {
            element.setAttribute('ref', ref)
        }

        return element;
    } else if (typeof tag === 'function') {
        return tag({ ref, children, ...props });
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
