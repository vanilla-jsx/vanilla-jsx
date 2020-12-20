import flatten from 'lodash.flattendeep';

export const createSSRElement = (tag) => {
    return ({ children, ...props }) => {
        const propsArr = Object.keys(props).map((key) => {
            if (props[key] && typeof props[key] === 'string') {
                return ` ${key}="${props[key]}"`;
            } else {
                return '';
            }
        });
        if (children === undefined) {
            return `<${tag}${propsArr.join('')}/>`
        } else {
            return `<${tag}${propsArr.join('')}>${Array.isArray(children) ? flatten(children).join('') : children}</${tag}>`;
        }
    };
};

export const createTplElement = (tag) => {
    return ({ children, ...props }) => {
        const propsArr = Object.keys(props).map((key) => {
            if (props[key] !== undefined && typeof props[key] !== 'function') {
                return ` ${key}="${props[key]}"`;
            } else {
                return '';
            }
        });

        return [ '<', tag, ...propsArr, ...(() => {
            if (!children) {
                return ['/>'];
            } else {
                children = Array.isArray(children) ? flatten(children) : [children];

                return ['>', ...children, '</', tag, '>'];
            }
        })() ];
    };
}
