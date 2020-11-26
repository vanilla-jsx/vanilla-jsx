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
            return `<${tag}${propsArr.join('')}>${children instanceof Array ? children.join('') : children}</${tag}>`;
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
        const _children = (() => {
            if (children === undefined) {
                return [];
            } else if (children instanceof Array) {
                return children.reduce((s, child) => {
                    if (!child) {
                        return s;
                    } else if (child instanceof Array) {
                        return s.concat(child);
                    } else {
                        s.push(child)
                        return s;
                    }
                }, []);
            } else {
                return [children];
            }
        })();
        return [ '<', tag, ...propsArr, ...(() => {
            if (_children.length) {
                return ['>', ..._children, '</', tag, '>'];
            } else {
                return ['/>'];
            }
        })() ];
    };
}
