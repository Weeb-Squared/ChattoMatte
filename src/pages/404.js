import React from "react";
import { Link } from "react-router-dom"

import "./404.css"

function Page404() {
    return (
        <div id="div404">
            Senpai, I'm stuck, please come&nbsp;<Link to="/">home</Link>.
        </div>
    )
}
export default Page404;