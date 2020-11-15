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
    <h3>Source code:</h3>
    <pre style="background: #eee; padding: 32px;"><code>{`
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
        <p>vanilla jsx without Vue.js or React.js</p>
        <p style="color: red">with attr, eg: style</p>
        <ComponentWithStyle>Component with style, support scoped use attr</ComponentWithStyle>
        <ComponnetWithEvent></ComponnetWithEvent>
        <SourceCode></SourceCode>
    </>;
}

document.body.append(<Content />);
