const style = <style>{`
    :host-context(h1) {
        color: red !important;
    }
`}</style>

export default ({ children }) => {
    return <span ref={(e) => {
        const shadow = e.attachShadow({ mode: 'open' });
        shadow.append(<>{style}<slot></slot></>);
    }}>
        {children}
    </span>
}
