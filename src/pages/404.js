import React from "react";
import { Link } from "react-router-dom"

import "./404.scss"

function Page404() {
    return (
        <div id="div404">
            <h1>404</h1>
            <p>Senpai, I'm stuck, please come&nbsp;<Link to="/">home</Link>.</p>
        </div>
    )
}
export default Page404;