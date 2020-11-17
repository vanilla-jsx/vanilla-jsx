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
            <h1>Use with WebComponents</h1>
            <p>Kebab case Tag is built to HTML Tag.</p>
            <p>You can define CustomElements by {`customElements.define('kebab-case-name', constructor)`}.</p>
            <p>Then {`<kebab-case-name />`}</p>
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
    return <bolt-a></bolt-a>
}
`}</code></pre>
        </bolt-a>
    </>;
}

export default Page;
