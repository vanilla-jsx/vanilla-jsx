export default (code, { dependences = [] } = {}) =>  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    ${(() => {
        if (process.env.NODE_ENV === 'development') {
            return `<script src="/jsx-runtime/dist/main.js"></script>
    <script src="/observer/dist/main.js"></script>`;
        } else {
            return `<script src="https://unpkg.com/@vanilla-jsx/jsx-runtime@1.2.3/dist/main.js"></script>
    <script src="https://unpkg.com/@vanilla-jsx/observer@1.3.1/dist/main.js"></script>`;
        }
    })()}
    ${dependences.map(ele => `<script src="${ele}"></script>`)}
    <script>
        window.require = function(path) {
            if (path === '@vanilla-jsx/jsx-runtime') {
                return {
                    jsxs: jsxs,
                    jsx: jsx,
                    Fragment: Fragment
                }
            } else if (path === '@vanilla-jsx/observer') {
                return {
                    rx: rx,
                    createRxElement: createRxElement
                }
            }
        }
    </script>
</head>
<body>
<script>
${code}
</script>
</body>
</html>
`;
