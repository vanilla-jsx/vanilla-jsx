function Canvas({ render }) {
    const canvas = <canvas></canvas>;
    const ctx = canvas.getContext('2d');
    render({ canvas, ctx });
    return canvas;
}

function CanvasGroup({ children }) {
    return <Canvas render={({ ctx }) => {
        if (children instanceof Array) {
            children.forEach((child) => {
                ctx.drawImage(child, 0, 0);
            })
        } else {
            ctx.drawImage(children, 0, 0);
        }
    }}></Canvas>
}

function Page () {
    return <CanvasGroup>
        <Canvas render={({ ctx }) => {
            ctx.fillStyle="#FF0000";
            ctx.beginPath();
            ctx.arc(70,18,15,0,Math.PI*2,true);
            ctx.closePath();
            ctx.fill();
        }}></Canvas>
    </CanvasGroup>;
}

export default Page;
