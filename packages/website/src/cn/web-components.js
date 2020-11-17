class Bolt extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(<div><slot /></div>);
    }
}

customElements.define('bolt-a', Bolt);

const StylePre = () => <style>{`
pre {
    padding: 32px;
    color: #333;
    background: #eee;
    overflow: scroll;
}
`}</style>;

function Page() {
    return <>
        <StylePre></StylePre>
        <bolt-a>
            <h1>在 WebComponents 中使用</h1>
            <p>小写的 tagname 会被渲染为原生 html tag.</p>
            <p>你可以通过 {`customElements.define('kebab-case-name', constructor)`} 定义一个 CustomElements.</p>
            <p>然后直接使用 {`<kebab-case-name />`}</p>
            <pre><code>{`
class Bolt extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(<div><slot /></div>);
    }
}

customElements.define('bolt-a', Bolt);

function Content() {
    return <bolt-a>这里被用于 slot</bolt-a>
}
`}</code></pre>
        </bolt-a>
    </>;
}

export default Page;
