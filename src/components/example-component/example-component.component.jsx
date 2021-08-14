import React from 'react';
import {ClickCounter} from "./example-component.styles";

const ExampleComponent = ({text, clickHandler}) => <ClickCounter onClick={() => clickHandler()}>{text}</ClickCounter>

export default ExampleComponent;