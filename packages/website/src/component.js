import Component from '@vanilla-jsx/component';

const StylePre = () => <style>{`
pre {
    padding: 32px;
    color: #333;
    background: #eee;
    overflow: scroll;
}
`}</style>;

const EventListener = ({ is: Is = 'event-listener', children, name, on, ...props }) => {
    const component = <Is {...props}>{children}</Is>;

    component.addEventListener(name, on);

    return component;
}

const DefineComponent = () => {
    return <>
        <p>define a component with state.</p>
            <pre><code>{`
import Component from '@vanilla-jsx/component'

const Content = Component((props, ctx) => {
    // run here once after Content component inited.
    return () => {
        // run here when ctx.render() every time.
        return <div></div>
    }
});

document.body.append(<Content />);
`}</code></pre>
    </>;
}

const SetState = Component((_, ctx) => () => {
    return <>
        <StylePre></StylePre>
<style>{`
.event-button {
    margin-right: 12px;
}
`}</style>
        <p>get/set state from ctx</p>
        <EventListener is="button" name="click" on={() => {
            ctx.num = ctx.num || 0;
            ctx.num += 1;
            ctx.render();
        }}>click me</EventListener> {ctx.num || ''}
        <pre><code>{`
const EventListener = ({ is: Is = 'event-listener', children, name, on, ...props }) => {
    const component = <Is {...props}>{children}</Is>;

    component.addEventListener(name, on);

    return component;
}

const Content = Component((props, ctx) => {
    return () => {
        <EventListener is="button" name="click" on={() => {
            ctx.num = ctx.num || 0;
            ctx.num += 1;
            ctx.render();
        }}>click me</EventListener> {ctx.num || ''}
    }
});
`}</code></pre>
    </>;
});

const StyleScoped = () => {
    return <>
        <p>Component style scoped default, because root of the component is <a href="https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM" target="_blank">Shadow Dom</a></p>
        <pre><code>{`
const Content = Component((props, ctx) => {
    return () => {
        return <>
            <style>{${'`'}
div {
    color: blue;
}
${'`'}}</style>
            <div>I'm blue.</div>
        </>;
    }
});

document.body.append(<><Content /><div>I'm not blue.</div></>);
`}</code></pre>
    </>
}

const SimpleRouter = () => {
    return <>
        <h3>simple router</h3>
        <pre><code>{`
const Page1 = () => <div>Page 1</div>;
const Page2 = () => <div>Page 2</div>;

const Root = Component((_, ctx) => {
    window.addEventListener('hashchange', () => ctx.render());

    return () => {
        if (location.hash === '#/page2') {
            return <Page2></Page2>;
        } else {
            return <Page1></Page1>;
        }
    }
});

document.body.append(<Root />);
`}</code></pre>
    </>;
}

const createInput = () => {
    const component = <input></input>;

    return ({ value = '', oninput }) => {
        component.value = value;
        component.addEventListener('input', oninput);

        return component;
    }
}

const Input1 = createInput();
const Input2 = createInput();

const imgConst = <img src="https://img.souche.com/684fcf0f15a4508f613ea2ecddc5e7de.jpg"></img>;
const inputConst = <input value="input something"></input>;

const StaticNode = Component((_, ctx) => () => {
    return <>
        <StylePre></StylePre>
        <h3>staticize node</h3>
        <style>{`
.img > img {
    width: 100px;
}

`}</style>
        <p><EventListener is="button" name="click" on={() => {
            ctx.num = ctx.num || 0;
            ctx.num += 1;
            ctx.render();
        }}>click me</EventListener> and next nodes (img / input) are reload because of Content rerender</p>
        <p class="img"><img src="https://img.souche.com/684fcf0f15a4508f613ea2ecddc5e7de.jpg"></img></p>
        <p><input value="input something"></input></p>
        <pre><code>{`
// wrong
const Content = Component(() => {
    return () => {
        return <>
            <EventListener is="button" name="click" on={() => {
                ctx.render();
            }}>click me</EventListener> and next img are reload because of Content rerender
            <img src="https://img.souche.com/684fcf0f15a4508f613ea2ecddc5e7de.jpg"></img>
            <input value="input something"></input>
        </>
    }
});
`}</code></pre>
        <p>You should staticize node used global const for fixed.</p>
        <p class="img">{imgConst}</p>
        <p>{inputConst}</p>
        <pre><code>{`
// right
const imgConst = <img src="https://img.souche.com/684fcf0f15a4508f613ea2ecddc5e7de.jpg"></img>;
const inputConst = <input value="input something"></input>;

const Content = Component(() => {
    return () => {
        return <>
            {imgConst}
            {inputConst}
        </>;
    }
});
`}</code></pre>
        <p>But global const can't use props. Use higher-order function output a Component. </p>
        <p><Input1 value={ctx.input1} oninput={(e) => {
            ctx.input1 = e.target.value;
            ctx.render();
        }}></Input1> ctx.input1:{ctx.input1}</p>
        <p><Input2 value={ctx.input2} oninput={(e) => {
            ctx.input2 = e.target.value;
            ctx.render();
        }}></Input2> ctx.input2:{ctx.input2}</p>
        <pre><code>{`
// better
const createInput = () => {
    const component = <input></input>;

    return ({ value = '', oninput }) => {
        component.value = value;
        component.addEventListener('input', oninput);

        return component;
    }
}

const Input1 = createInput();
const Input2 = createInput();

const Content = Component((_, ctx) => {
    return () => {
        return <>
            <Input1 value={ctx.input1} oninput={(e) => {
                ctx.input1 = e.target.value;
                ctx.render();
            }}></Input1> ctx.input1:{ctx.input1}
            <Input2 value={ctx.input2} oninput={(e) => {
                ctx.input2 = e.target.value;
                ctx.render();
            }}></Input2> ctx.input2:{ctx.input2}
        </>
    }
});
`}</code></pre>
    </>
})

const Content = Component(() => {
    return () => {
        return <>
            <StylePre></StylePre>
            <a href="#/">back Home</a>
            <h1>@vanilla-jsx/component</h1>
            <DefineComponent></DefineComponent>
            <SetState></SetState>
            <StyleScoped></StyleScoped>
            <SimpleRouter></SimpleRouter>
            <StaticNode></StaticNode>
        </>
    }
});

export default () => <Content></Content>;
