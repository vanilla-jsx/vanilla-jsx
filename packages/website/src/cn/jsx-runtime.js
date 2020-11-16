function ComponnetWithEvent() {
    const button = <button style="margin-top: 30px">点我</button>;

    button.addEventListener('click', (e) => {
        button.replaceChildren(<ComponentWithStyle>支持事件监听, 然后做一些事情, 如: 替换 children 内容</ComponentWithStyle>)
    });

    return <>{button}</>;
}

function ComponentWithStyle({ children }) {
    const id = `id_${new Date().getTime()}_${parseInt(Math.random() * 1000)}`
    return <>
        <div class={id}>{children}</div>
        <style type="text/css">{`
            .${id} {
                color: blue;
            }
        `}</style>
    </>;
}

function SourceCode() {
    return <>
    <h3>Source code:</h3>
    <pre style="background: #eee; color: #333; padding: 32px;"><code>{`
function ComponnetWithEvent() {
    const button = <button style="margin-top: 30px">点我</button>;

    button.addEventListener('click', (e) => {
        button.replaceChildren(<ComponentWithStyle>支持事件监听, 然后做一些事情, 如: 替换 children 内容</ComponentWithStyle>)
    });

    return <>{button}</>;
}

function ComponentWithStyle({ children }) {
    const id = ${'`id_${new Date().getTime()}_${parseInt(Math.random() * 1000)}`'}
    return <>
        <div class={id}>{children}</div>
        <style type="text/css">{${'`'}
            ${'.${id} {'}
                color: blue;
            }
        ${'`'}}</style>
    </>;
}

function Content() {
    return <>
        <h1>vanilla-jsx</h1>
        <p>vanilla jsx 而不需要 Vue.js 或 React.js | <a href="https://github.com/vanilla-jsx/vanilla-jsx" target="_blank">github</a>/<a href="https://github.com/vanilla-jsx/vanilla-jsx/tree/main/packages/website" target="_blank">website</a></p>
        <p style="color: red">使用 html attr, 如: style</p>
        <ComponentWithStyle>带样式的组件, 可以基于 html attr 实现 scoped</ComponentWithStyle>
        <ComponnetWithEvent></ComponnetWithEvent>
        <SourceCode></SourceCode>
        想要带状态的组件吗? 看这里 <a href="#/component">@vanilla-jsx/component</a>
    </>;
}

document.body.append(<Content />);
`}</code></pre>
    </>;
}

function Content() {
    return <>
        <h1>vanilla-jsx</h1>
        <p>vanilla jsx 而不需要 Vue.js 或 React.js | <a href="https://github.com/vanilla-jsx/vanilla-jsx" target="_blank">github</a>/<a href="https://github.com/vanilla-jsx/vanilla-jsx/tree/main/packages/website" target="_blank">website</a></p>
        <p style="color: red">使用 html attr, 如: style</p>
        <ComponentWithStyle>带样式的组件, 可以基于 html attr 实现 scoped</ComponentWithStyle>
        <ComponnetWithEvent></ComponnetWithEvent>
        <SourceCode></SourceCode>
        想要带状态的组件吗? 看这里 <a href="#/cn/component">@vanilla-jsx/component</a>
    </>;
}

export default Content;
