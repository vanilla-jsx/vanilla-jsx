import Prismjs from 'prismjs'

function ComponnetWithEvent() {
    const button = <button style="margin-top: 30px">click me</button>;

    button.addEventListener('click', (e) => {
        button.replaceChildren(<ComponentWithStyle>surpport event listener, then do something, eg: replace children </ComponentWithStyle>)
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism.css" />
    <h3>Source code:</h3>
    <pre style="background: #eee; color: #333; padding: 32px; overflow: scroll;"><code class="language-javascript" ref={(ele) => {
            Prismjs.highlightElement(ele);
    }}>{`
function ComponnetWithEvent() {
    const button = <button style="margin-top: 30px">click me</button>;

    button.addEventListener('click', (e) => {
        button.replaceChildren(<ComponentWithStyle>surpport event listener, then do something, eg: replace children </ComponentWithStyle>)
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
        <p>vanilla jsx without Vue.js or React.js</p>
        <p style="color: red">with attr, eg: style</p>
        <p ref={(ele) => {
            console.log(ele);
        }}>with ref, for get this dom.</p>
        <ComponentWithStyle>Component with style, support scoped use attr</ComponentWithStyle>
        <ComponnetWithEvent></ComponnetWithEvent>
    </>;
}

document.body.append(<Content />);
`}</code></pre>
    </>;
}

function Content() {
    return <>
        <h1>vanilla-jsx</h1>
        <p>vanilla jsx without Vue.js or React.js | <a href="https://github.com/vanilla-jsx/vanilla-jsx" target="_blank">github</a>/<a href="https://github.com/vanilla-jsx/vanilla-jsx/tree/main/packages/website" target="_blank">website</a></p>
        <p style="color: red">with attr, eg: style</p>
        <p ref={(ele) => {
            console.log(ele);
        }}>with ref, for get this dom.</p>
        <ComponentWithStyle>Component with style, support scoped use attr</ComponentWithStyle>
        <ComponnetWithEvent></ComponnetWithEvent>
        <SourceCode></SourceCode>
        Want component with state? Go to <a href="#/component">@vanilla-jsx/component</a>
    </>;
}

export default Content;
