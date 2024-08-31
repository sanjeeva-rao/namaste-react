import React from "react";
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))

const heading = (
    <div>
        <h1>Heading 1</h1>
    </div>);

const Component2 = () => (<div>
    <p>Example for component</p>
</div>)

const HeadingComponent = () => {
    return(
        <div>
            <Component2/>
            {heading}
        </div>
    )
}

console.log(heading, "heading");

root.render(<HeadingComponent/>);

{/* <HeadingComponent></HeadingComponent>
HeadingComponent() */}