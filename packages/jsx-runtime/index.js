const flatten = require('lodash.flattendeep');

exports.jsxs = exports.jsx = (tag, { ref, children, ...props } = {}) => {
    if (typeof tag === 'string') {
        const element = document.createElement(tag);

        Object.keys(props).forEach((key) => {
            if (!props[key]) {

            } else if (typeof props[key] === 'function') {
                element[key] = props[key];
            } else {
                element.setAttribute(key, props[key]);
            }
        });

        if (!children) {

        } else {
            children = Array.isArray(children) ? flatten(children) : [children];

            children.forEach((child) => {
                child && element.append(child);
            });
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

    } else {
        children = Array.isArray(children) ? flatten(children) : [children];

        children.forEach((child) => {
            child && element.append(child);
        });
    }

    return element;
}
