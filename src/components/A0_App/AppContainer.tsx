import {App} from "./App";
import * as React from "react";
import {HashRouter} from "react-router-dom";

export const AppContainer = () => {
    return (
        <HashRouter>
            <App/>
        </HashRouter>

    )
}
