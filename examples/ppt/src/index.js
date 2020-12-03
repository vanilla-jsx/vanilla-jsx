import { PPT, Slide, styled } from './ppt';

const Content = () => {
    return <PPT>
        <Slide>
            {styled('h1')`
            `}
            {styled('h2')`
                background: #eee;
                padding: 16px;
                cursor: pointer;
            `}
            <h1>Sprint reviews</h1>
            <p>Sprint <span style="color: red;">reviews</span> are not <span style="color: red;">retrospectives</span>. </p>
            <h2>Step 1: define done</h2>
            <h2>Step 2: celebrate the team</h2>
            <h2>Step 3: reach across geographies</h2>
            <h2>A final word of advice</h2>
        </Slide>
        <Slide animation="slideup">
            {styled('h2')`
            `}
            {styled('h3')`
                background: #eee;
                padding: 16px;
                cursor: pointer;
            `}
            <h2>Step 1{`:`} define done</h2>
            <h3>A culture of delivery</h3>
            <h3>Defining ‘done’ on each work item</h3>
        </Slide>
        <Slide>
            {styled('h2')`
            `}
            {styled('h3')`
                background: #eee;
                padding: 16px;
                cursor: pointer;
            `}
            <h2>Step 2{`:`} celebrate the team</h2>
        </Slide>
        <Slide>
            {styled('h2')`
            `}
            {styled('h3')`
                background: #eee;
                padding: 16px;
                cursor: pointer;
            `}
            <h2>Step 3{`:`} reach across geographies</h2>
        </Slide>
        <Slide>
            {styled('h1')`
            `}
            {styled('h2')`
                background: #eee;
                padding: 16px;
                cursor: pointer;
            `}
            <h1>Sprint reviews</h1>
            <h2>Step 1{`:`} define done</h2>
            <h2>Step 2{`:`} celebrate the team</h2>
            <h2>Step 3{`:`} reach across geographies</h2>
            <h2>A final word of advice</h2>
        </Slide>
        <Slide>
            <h1>standups</h1>
        </Slide>
    </PPT>;
}

document.body.append(<Content />);
