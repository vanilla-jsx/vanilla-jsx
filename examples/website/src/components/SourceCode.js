function SourceCode({ code }) {
    var output = Babel.transform(code, {
        presets: [
            'env',
            [
                'react',
                {
                    pragma: ''
                }
            ]
        ]
    }).code;
    console.log(output);
    return <>
        <div>asdf</div>
    </>
}

export default SourceCode;
