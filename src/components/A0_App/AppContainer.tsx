import * as React from "react";
import {HashRouter} from "react-router-dom";
import { Suspense } from "react";
//import {Preloader} from "../A3_Preloader/Preloader";

const App = React.lazy(() => import("./App"));

export const AppContainer = () => {
    return (
        // <Suspense fallback={<Preloader/>}>
            <HashRouter>
                <App/>
            </HashRouter>
        // </Suspense>
    )
}
