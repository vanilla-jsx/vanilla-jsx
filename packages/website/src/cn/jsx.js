function MyJsx() {
    return <>
        <h1>重新定义 JSX</h1>
        <p>vanilla-jsx 中文为纯粹的 jsx, 也就是 js 的一种语法糖, 用类似 xml 的语法来描述一些 js 语句.</p>
        <p>React 使用 jsx 来描述用户界面, @reach/router (一个 react 技术栈的路由框架) 使用 jsx 描述了路由信息.</p>
        <p>我们可以让 jsx 来做更多的事, 但是我们不需要做更多的事.</p>
        <p>vanilla-jsx 将 jsx 定义为一个函数的执行, 也就是 {`<Component></Component>`} 等价为 {`Component()`}</p>
        <p>props 即该函数的参数</p>
        <p>定义一个函数, 然后去用 jsx 做任何事吧.</p>
        <h3>例外</h3>
        <p>需要注意一些特殊情况, 如 div/span/img/input, 小写标签已经被 html 元素占用, 即 {`<div></div>`} 等价为 {`document.createElement('div')`}.</p>
        <p>{`<></>`} 为 fragment, 是当根节点不能唯一时, 外面套一个这个作为唯一根节点, 他等价为 {`document.createElementFragment()`} 因此也不能作为普通函数调用.</p>
    </>;
}

export default MyJsx;
