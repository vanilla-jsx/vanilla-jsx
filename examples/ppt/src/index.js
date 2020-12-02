const styled = (selector) => {
    return (c) => {
        return <style>{selector}{'{'}{c}{'}'}</style>;
    }
}

const Slide = ({ children }) => <>{children}</>;

const PPT = ({ ref, children }) => {
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

    ref(methods);

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

const Content = () => {
    const state = {};

    return <PPT ref={(ppt) => state.ppt = ppt}>
        <Slide>
            {styled('h1')`
            `}
            {styled('h2')`
                background: #eee;
                padding: 16px;
                cursor: pointer;
            `}
            <h1>Sprint reviews</h1>
            <h2>Step 1{`:`} define done</h2>
            <h2>Step 2{`:`} celebrate the team</h2>
            <h2>Step 3{`:`} reach across geographies</h2>
            <h2>A final word of advice</h2>
        </Slide>
        <Slide>
            {styled('h2')`
            `}
            {styled('h3')`
                background: #eee;
                padding: 16px;
                cursor: pointer;
            `}
            <h2>Step 1{`:`} define done</h2>
        </Slide>
        <Slide>
            {styled('h2')`
            `}
            {styled('h3')`
                background: #eee;
                padding: 16px;
                cursor: pointer;
            `}
            <h2>Step 2{`:`} celebrate the team</h2>
        </Slide>
        <Slide>
            {styled('h2')`
            `}
            {styled('h3')`
                background: #eee;
                padding: 16px;
                cursor: pointer;
            `}
            <h2>Step 3{`:`} reach across geographies</h2>
        </Slide>
        <Slide>
            {styled('h1')`
            `}
            {styled('h2')`
                background: #eee;
                padding: 16px;
                cursor: pointer;
            `}
            <h1>Sprint reviews</h1>
            <h2>Step 1{`:`} define done</h2>
            <h2>Step 2{`:`} celebrate the team</h2>
            <h2>Step 3{`:`} reach across geographies</h2>
            <h2>A final word of advice</h2>
        </Slide>
        <Slide>
            <style>
                
            </style>
            <h1>standups</h1>
        </Slide>
    </PPT>;
}

document.body.append(<Content />);
