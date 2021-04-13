import React, {useState} from 'react'
import './App.scss';

import MainLayout from "./layouts/MainLayout";

const App = (props) => {
    const [theme, setTheme] = useState(false);

    const updateTheme = () => {
        setTheme(!!theme === false);
    }

    return (
        <div className={theme === false
            ? `app-wrapper app-wrapper__white`
            : `app-wrapper app-wrapper__dark`}>

            <MainLayout updateTheme={updateTheme} theme={theme} storeTable={props.storeTable}/>

        </div>
    )
}

export default App;
