import flatten from 'lodash.flattendeep';
import { observable, isObservable, observe, unobserve, raw } from '@nx-js/observer-util';

export const rx = (value) => {
    if (isObservable(value)) {
        return value;
    } else if (typeof value === 'object') {
        return observable(value);
    } else if (typeof value === 'function') {
        const wrapper = rx();
        observe(() => wrapper.value = value());
        return wrapper;
    } else {
        return observable({
            value,
            toString() {
                return this.value;
            },
            valueOf() {
                return this.value;
            }
        })
    }
}

export const createRxElement = (Tag) => {
    return ({ ref, children, ...props }) => {
        if (typeof Tag === 'string') {
            const element = document.createElement(Tag);

            Object.keys(props).forEach((key) => {
                observe(() => {
                    if (!props[key]) {
                        element.removeAttribute(key);
                        if (element[key]) {
                            element[key] = null;
                        }
                    } else if (typeof props[key] === 'function') {
                        element[key] = props[key];
                    } else {
                        element.setAttribute(key, props[key]);
                        if (element[key] !== props[key]) {
                            element[key] = props[key];
                        }
                    }
                });
            });

            observe(() => {
                element.innerHTML = '';
                while(element.hasChildNodes()) {
                    element.removeChild(element.firstChild);
                }
                if (!children) {

                } else {
                    children = Array.isArray(children) ? flatten(children) : [children];

                    children.forEach((child) => {
                        child && element.append(child);
                    });
                }
            });

            observe(() => {
                if (!ref) {

                } else if (typeof ref === 'function') {
                    ref(element);
                } else {
                    element.setAttribute(key, props[key])
                }
            });

            return element;
        } else if (typeof tag === 'function') {
            console.warn('非原生 dom, 不需要 reactive', tag);
            return tag({ ref, children, ...props });
        } else {
            console.error('未知 tag 类型', tag);
        }
    }
}

export {
    observable, isObservable, observe, unobserve, raw
}
