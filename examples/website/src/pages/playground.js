import { createTplElement } from '@vanilla-jsx/ssr';

const Div = createTplElement('div');
const Img = createTplElement('img');

const arr = <Div attr="something">children<Img src="xx"/></Div>;
console.log(arr.join('')); //

export default () => {
    return <div></div>
}