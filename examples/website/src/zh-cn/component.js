import Component from '@vanilla-jsx/component';

const StylePre = () => <style>{`
pre {
    padding: 32px;
    color: #333;
    background: #eee;
    overflow: scroll;
}
`}</style>;

const DefineComponent = () => {
    return <>
        <p>定义一个带状态的组件.</p>
        <pre><code>{`
import Component from '@vanilla-jsx/component'

const Content = Component((props, ctx) => {
    // 这里的代码仅在组件初始化时执行一次.
    return () => {
        // 这里的代码在触发 ctx.render() 时每次都执行.
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
        <p>操作 ctx 来 get/set state</p>
        <button ref={(button) => {
            button.addEventListener('click', () => {
                ctx.num = ctx.num || 0;
                ctx.num += 1;
                ctx.render();
            })
        }}>点我</button> {ctx.num || ''}
        <pre><code>{`
const Content = Component((props, ctx) => {
    return () => {
        <button ref={(button) => {
            button.addEventListener('click', () => {
                ctx.num = ctx.num || 0;
                ctx.num += 1;
                ctx.render();
            })
        }}>点我</button> {ctx.num || ''}
    }
});
`}</code></pre>
    </>;
});

const StyleScoped = () => {
    return <>
        <p>组件样式默认是 scoped 的, 因为组件的根节点被设置成了 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM" target="_blank">Shadow Dom</a></p>
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
        <h3>一个简单的路由</h3>
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
        <h3>静态节点</h3>
        <style>{`
.img > img {
    width: 100px;
}

`}</style>
        <p><button ref={(button) => {
            button.addEventListener('click', () => {
                ctx.render();
            })
        }}>点我</button> 下面的节点 (img / input) 被重新加载了, 因为 Content 组件的重新渲染</p>
        <p class="img"><img src="https://img.souche.com/684fcf0f15a4508f613ea2ecddc5e7de.jpg"></img></p>
        <p><input value="input something"></input></p>
        <pre><code>{`
// wrong
const Content = Component(() => {
    return () => {
        return <>
            <button ref={(button) => {
                button.addEventListener('click', () => {
                    ctx.render();
                })
            }}>点我</button> 下面的节点 (img / input) 被重新加载了, 因为 Content 组件的重新渲染
            <img src="https://img.souche.com/684fcf0f15a4508f613ea2ecddc5e7de.jpg"></img>
            <input value="input something"></input>
        </>
    }
});
`}</code></pre>
        <p>你应该使用全局常量来静态化节点修复这个问题.</p>
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
        <p>但是全局常量不能使用组件的 props. 可以使用一个高阶函数输出组件. </p>
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
            <a href="#/cn">回到首页</a>
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
