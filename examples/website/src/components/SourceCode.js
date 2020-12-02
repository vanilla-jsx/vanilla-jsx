import Prismjs from 'prismjs'
import tpl from '../utils/tpl';

function SourceCode({ code, dependences, preview = true }) {
    var output = Babel.transform(code, {
        presets: [
            'env',
            [
                'react',
                {
                    runtime: 'automatic',
                    importSource: '@vanilla-jsx'
                }
            ]
        ]
    }).code;

    return <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify/themes/vue.css" />
        <div style="color: #333; border: 1px solid #eee; display: flex">
            <pre style="margin: 0; flex: 1;"><code class="language-javascript" ref={(ele) => {
                Prismjs.highlightElement(ele);
            }}>{code}</code></pre>
            {preview && <div style="flex: 1; background: #fff;">
                <iframe style="border: none; height: 100%; margin: 0;" ref={(e) => {
                    e.setAttribute('srcdoc', tpl(output, {
                        dependences
                    }))
                }}></iframe>
            </div>}
        </div>
    </>
}

export default SourceCode;
