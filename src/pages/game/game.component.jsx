import React, {useState} from 'react';
import ExampleComponent from "../../components/example-component/example-component.component";

const GamePage = () => {
    const [clicks, setClicks] = useState(0);

    const doClick = () => setClicks(clicks + 1);

    return <ExampleComponent text={clicks > 0 ? <span>Clicks {clicks}</span> : "Click Me" } clickHandler={doClick} />
}

export default GamePage;