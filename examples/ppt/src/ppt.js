export const styled = (selector) => {
    return (c) => {
        return <style>{selector}{'{'}{c}{'}'}</style>;
    }
}

export const Slide = ({ children }) => <>{children}</>;

export const PPT = ({ ref, children }) => {
    const state = {
        i: 0
    };
    const methods = {
        render() {
            state.ele.innerHTML = '';
            state.ele.append(children[state.i].cloneNode(true));
        },
        last() {
            if (state.i > 0) {
                state.i -= 1;
            }
            this.render();
        },
        next() {
            if (state.i < children.length - 1) {
                state.i += 1;
            }
            this.render();
        }
    };

    ref && ref(methods);

    window.addEventListener('keypress', (e) => {
        if (e.code === 'Space') {
            methods.next();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
            e.preventDefault();
            methods.last();
        } else if (e.code === 'ArrowRight' || e.code === 'ArrowDown') {
            e.preventDefault();
            methods.next();
        }
    });

    return <div ref={(ele) => state.ele = ele }>{ children[state.i].cloneNode(true) }</div>;
};