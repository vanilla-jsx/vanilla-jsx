export default (code) =>  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/@vanilla-jsx/jsx-runtime@1.2.3/dist/main.js"></script>
    <script>
        window.require = function() {
            return {
                jsxs: jsxs,
                jsx: jsx,
                Fragment: Fragment
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
